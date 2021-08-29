const OrderDB = require('../DBModels/OrderDB');

const Order_add = (data) => {
    data = JSON.parse(data);
    let date = new Date();

    //used to form a queue
    data.order_num = date.getTime();

    console.log("Adding order: " + data.order_name + " for " + data.menu_selection);

    OrderDB.create(data);
}

//no json parameter is necessary here
const Order_del = (data) => {
    data = JSON.parse(data);

    console.log("removing order: " + data.order_name + " for " + data.menu_selection);

    OrderDB.findByIdAndRemove(data._id).exec();
}

const Order_list = (req, res) => {
    OrderDB.find()
    .then((result) => {
        result.toArray;

        console.log("sending order list.");

        res.send(result);
    });
}

module.exports = {
    Order_add,
    Order_del,
    Order_list
}