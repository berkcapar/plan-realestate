const mongoose = require("mongoose");

const propertiesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  option: {
    type: String,
  },
  propertyType: {
    type: String,
  },
  city: {
    type: String,
  },
  location: {
    type: String,
  },
  price: {
    type: Number,
  },
  m2: {
    type: Number,
  },
  roomnumber: {
    type: Number,
  },
  photos: [
    {
      type: String,
    },
  ],
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
});

propertiesSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Properties = mongoose.model("Properties", propertiesSchema);

module.exports = Properties;
