const express = require("express");
const config = require("universal-config");
const Unsplash = require("unsplash-js");
const toJson = require("unsplash-js").toJson;

// this is window.fetch for fetch api
global.fetch = require("node-fetch");

// creating new unsplash as docs say
const unsplash = new Unsplash({
  applicationId: config.get("APPLICATION_ID"),
  secret: config.get("SECRET"),
  callbackURL: config.get("CALLBACK_URL")
});

const app = express();

// API INFO
app.get("/api/photos", (req, res) => {
  unsplash.photos
    .listPhotos(req.query.start, req.query.count)
    .then(toJson)
    .then(data => {
      res.json(data);
    });
});

// server on port 8080
const PORT = procces.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
