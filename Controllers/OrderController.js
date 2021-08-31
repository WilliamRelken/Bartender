const express = require('express');
const OrderDB = require('../modelsdb/OrderDB');

const router = express.Router();

//list
router.get("/", async (req, res) => {
    const result = await OrderDB.find();
    res.send(result);
    });
  
//add
router.post("/", async (req, res) => {
    //creates position for queue
    req.body.order_num = new Date().getTime();

    const result = await OrderDB.create(req.body).catch(err => console.log(err));
    res.send(result);
    });

//delete
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await OrderDB.deleteOne({ _id: id });
    res.send(result);
    });

module.exports = router;
