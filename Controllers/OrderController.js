const express = require('express');
const OrderModel = require('../Models/OrderModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<p>This is the order page</p>');
});

router.post('/add', (req, res) => {

    OrderModel.Order_add(JSON.stringify(req.body));

    res.send("<h1>Order Made</h1>");
});

router.post('/del', (req, res) => {

    OrderModel.Order_del(JSON.stringify(req.body));

    res.send("<h1>Order Removed</h1>");
});

router.get('/list', OrderModel.Order_list);

module.exports = router;
