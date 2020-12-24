const adminsignupRouter = require('express').Router()
const jwt = require('bcrypt')
const bcrypt = require('bcrypt')
const Admin = require('../models/admin')


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

module.exports = adminsignupRouter