const express = require('express');
const MenuModel = require('../Models/MenuModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<p>This is the menu page</p>');
});

//if time permits I may functionalize the add/remove menu items

router.post('/add', (req, res) => {

    MenuModel.Menu_add(JSON.stringify(req.body));

    res.send("<h1>Menu Item Made</h1>");
});

router.post('/del', (req, res) => {

    MenuModel.Menu_del(JSON.stringify(req.body));

    res.send("<h1>Menu Item Removed</h1>");
});


//list all menu items
router.get('/list', MenuModel.Menu_list);

module.exports = router;