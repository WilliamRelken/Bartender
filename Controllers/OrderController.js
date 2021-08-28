const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<p>This is the order page</p>');
});

router.post('/add', (req, res) => {
    
});

router.get('/list', (req, res) => {
    res.send([
        {
            "_id": "4182394123",
            "order_num": 15,
            "menu_selection": "beer",
            "order_name": "john"
        }
    ]);
});

module.exports = router;
