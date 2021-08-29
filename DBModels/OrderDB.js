const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    order_num: Number,
    menu_selection: String,
    order_name: String
});

const OrderDB = mongoose.model('orders', orderSchema);

module.exports = OrderDB;