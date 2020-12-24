const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')


const adminSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true
    },
    passwordHash:{
        type: String
    },
    properties:[ 
      { 
      type: mongoose.Schema.Types.ObjectId,
      ref:'Properties'
    }
    ]
})

adminSchema.plugin(uniqueValidator)

adminSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin