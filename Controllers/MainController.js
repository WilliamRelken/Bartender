const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<p>This is the index page</p>');
});

module.exports = router;