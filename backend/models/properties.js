const mongoose = require("mongoose");

const propertiesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  city: {
    type: String,
  },
  price: {
    type: String,
  },
  m2: {
    type: String,
  },
  photos: [
    {
      photo1: {},
      photo2: {},
      photo3: {},
    },
  ],
});

const Properties = mongoose.model("Properties", propertiesSchema);

module.exports = Properties;
