const adminloginRouter = require('express').Router()
const adminsignupRouter = require('express').Router()
const jwt = require('bcrypt')
const bcrypt = require('bcrypt')
const Admin = require('../models/admin')


adminloginRouter.post('/', async (request, response)=>{
    const body = request.body
    const admin = await Admin.findOne({email:body.email})
    const passwordCorrect = admin === null
    ? false
    : await bcrypt.compare(body.password, admin.passwordHash)

    if(!(admin && passwordCorrect)){
        return response.status(401).json({
            error:'invalid name or password'
        })
    }
    const adminforToken = {
        email: admin.email,
        id: admin._id
    }

    const token = jwt.sign(adminforToken, process.env.SECRET)
    response.status(200)
    .send({token, email: admin.email})
})

adminsignupRouter.post('/', async(request, response)=>{
    const body = request.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const admin = new Admin({
        email: body.email,
        passwordHash
    })
    const savedAdmin = await admin.save()
    response.status(201).json(savedAdmin.toJSON())
})

module.exports = adminloginRouter, adminsignupRouter


