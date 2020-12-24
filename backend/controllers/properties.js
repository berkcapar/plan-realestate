const propertiesRouter = require("express").Router();
const Properties = require("../models/properties");
const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

const getTokenFrom = request => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    return authorization.substring(7);
  }
  return null;
};

propertiesRouter.get('/', async (request,response)=>{
  const properties = await Properties.find({})
  response.json(properties.map(property=>property.toJSON()))
})

propertiesRouter.post("/", async (request, response) => {
  const body = request.body;
  const token = getTokenFrom(request);

  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const admin = await Admin.findById(decodedToken.id);

  const property = new Properties({
    option: body.option,
    propertyType: body.propertyType,
    title: body.title,
    city: body.city,
    price: body.price,
    m2: body.m2,
    roomnumber: body.roomnumber,
    admin: admin._id
  });
  const savedProperty = await property.save();
  admin.properties = admin.properties.concat(savedProperty._id)
  await admin.save()

  response.json(savedProperty.toJSON());
});

module.exports =  propertiesRouter