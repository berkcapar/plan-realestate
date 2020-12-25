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
  roomnumber: {
    type: String,
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

const Properties = mongoose.model("Properties", propertiesSchema);

module.exports = Properties;
