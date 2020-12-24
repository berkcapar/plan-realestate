const adminloginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
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


module.exports = adminloginRouter


