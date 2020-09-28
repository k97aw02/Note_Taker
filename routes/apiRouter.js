const apiRouter = require("express").Router();
const fs = require('fs');
const { uuid } = require('uuidv4');
const path = require('path');

let dbase = require('../db/db.json');

// GET all notes from the dbase
apiRouter.get("/notes", (req, res) => {
  res.json(dbase);
});

apiRouter.post("/notes", (req, res) => {
  req.body.id = uuid();
    //push new note to notes array and rewrite object
    dbase.push(req.body);
    fs.writeFile("./db/db.json", JSON.stringify(dbase), function (err) {
      if (err) throw err;
    });
    res.json(req.body);
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
apiRouter.delete("/notes/:id", (req, res) => {
  let Note_Id = (noteObject) => {
    if (noteObject.id != req.params.id) {
      return true
    } else {
      return false
    }
  }

  dbase = dbase.filter(Note_Id);
  //Delete and rewrite db.json file with new notes array
  fs.writeFile('./db/db.json', JSON.stringify(dbase), function (err) {
    if (err) throw err;
  });

  res.send('DELETE request at /api/notes/:id')
});

module.exports = apiRouter;
