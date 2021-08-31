const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    drink_name: String,
    drink_price: Number
});

const MenuDB = mongoose.model('menu', menuSchema);

module.exports = MenuDB;