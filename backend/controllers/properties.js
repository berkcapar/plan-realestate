const propertiesRouter = require("express").Router();
const Properties = require("../models/properties");
const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { uuid } = require("uuidv4");

const DIR = "./public";

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, DIR);
  },
  filename: (request, file, cb) => {
    const filename = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuid() + "-" + filename);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    return authorization.substring(7);
  }
  return null;
};

propertiesRouter.get("/", async (request, response) => {
  const properties = await Properties.find();

  response.json({
    properties: properties.map((property) => property.toJSON()),
  });
});

propertiesRouter.post(
  "/",
  upload.array("photos"),
  async (request, response) => {
    const url = request.protocol + "://" + request.get("host");
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
      photos: request.files.map((file) => url + "/public/" + file.filename),
      admin: admin._id,
    });

    const savedProperty = await property.save();
    admin.properties = admin.properties.concat(savedProperty._id);
    await admin.save();

    response.json({
      property: savedProperty.toJSON(),
    }); // burdaki return, dispatch'le aynı olmalı
  }
);

propertiesRouter.delete("/:id", async (request, response) => {
  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const admin = await Admin.findById(decodedToken.id);
  const property = await Properties.findById(request.params.id);
  await property.remove();
  admin.properties = admin.properties.filter(
    (property) => property.id.toString() !== request.params.id.toString()
  );
  await admin.save();
  response.status(204).json({ success: "delete successful" }).end(); // success mesajı neden postmande görünmüyor && sona end() koymanın ne faydası var.
});
module.exports = propertiesRouter;
