const express = require('express');
const TodoDB = require('../modelsdb/TodoDB');

const router = express.Router();

// list
router.get("/", async (req, res) => {
  const result = await TodoDB.find();
  res.send(result);
});

router.post("/", async (req, res) => {
  const result = await TodoDB.create(req.body);
  res.send(result);
});

router.put("/", async (req, res) => {
  const { _id } = req.body;
  const result = await TodoDB.updateOne({ _id }, req.body);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await TodoDB.deleteOne({ _id: id });
  res.send(result);
});

module.exports = router;