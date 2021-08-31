const express = require('express');
const MenuDB = require('../modelsdb/MenuDB');

const router = express.Router();

router.get("/", async (req, res) => {
    const result = await MenuDB.find();
    res.send(result);
    });
  
//add
router.post("/", async (req, res) => {
    const result = await MenuDB.create(req.body);
    res.send(result);
    });

//delete
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await MenuDB.deleteOne({ _id: id });
    res.send(result);
    });

module.exports = router;