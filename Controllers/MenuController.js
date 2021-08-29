const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<p>This is the menu page</p>');
});

//if time permits I may functionalize the add/remove menu items
/*
router.post('/add', (req, res) => {

    OrderModel.Order_add(JSON.stringify(req.body));

    res.send("<h1>Menu Item Made</h1>");
});

router.post('/del', (req, res) => {

    OrderModel.Order_del(JSON.stringify(req.body));

    res.send("<h1>Menu Item Removed</h1>");
});
*/

//list all menu items
router.get('/list', OrderModel.Order_list);

module.exports = router;