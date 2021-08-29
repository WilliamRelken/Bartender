//'use strict';
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    router = express.Router(),
    mongoose = require('mongoose'),
    keys = require('./config/keys');

const IndexController = require('./Controllers/MainController');
const OrderController = require('./Controllers/OrderController');
const MenuController = require('./Controllers/MenuController'); 

app.use(express.json());

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(port, () => {console.info("Server started");}))
    .catch((err) => console.log(err))


//hold index route
app.use('/', IndexController);

//hold all order routes
app.use('/Order', OrderController);

//hold all menu routes
app.use('/Menu', MenuController);



//app.use("/", router); 