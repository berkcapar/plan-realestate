const propertiesRouter = require('express').Router()
const Properties = require('../models/properties')

propertiesRouter.post('/', async(request,response)=>{
    const properties = new Properties({
        
    })
})