const mongoose = require('mongoose');
//const Schema = mongoose.Schema; same thing as line 3 lesson 40 udemy
const { Schema } = mongoose;

const orderSchema = new Schema({
    order_num: Number,
    menu_selection: String,
    order_name: String
});

const OrderDB = mongoose.model('orders', orderSchema);

module.exports = OrderDB;