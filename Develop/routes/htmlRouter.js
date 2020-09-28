const path = require("path");
const htmlrouter = require("express").Router();

// "/notes" responds with the notes.html file
htmlrouter.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// All other routes respond with the index.html file
htmlrouter.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlrouter;