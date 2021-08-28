'use strict';
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    router = express.Router(),
    path = require('path');

const IndexController = require('./Controllers/MainController');
const OrderController = require('./Controllers/OrderController');
const MenuController = require('./Controllers/MenuController'); 

//app is now listening on port
app.listen(port, function () {

    console.info("Server started.");

});




//hold index route
app.use('/', IndexController);

//hold all order routes
app.use('/Order', OrderController);

app.use('/Menu', MenuController);



//app.use("/", router); 