const router = require("express").Router();
const notes = require("../db/notes");

router.get("/notes", (req, res) => {
  notes
    .getNotes()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => res.status(500).json(err));
});



router.post("/notes", (req, res) => {
  notes
    .createNote(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

router.delete("/notes/:id", (req, res) => {
  notes
    .removeNote(req.params.id)
    .then(() =>
      res.json({ ok: true }).catch((err) => res.status(500).json(err))
    );
});
module.exports = router;
