const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<p>This is the menu page</p>');
});

module.exports = router;