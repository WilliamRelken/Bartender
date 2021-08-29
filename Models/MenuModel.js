const MenuDB = require('../DBModels/MenuDB');

const Menu_add = (data) => {
    data = JSON.parse(data);

    MenuDB.create(data);

}

//no json parameter is necessary here
const Menu_del = (data) => {
    data = JSON.parse(data);

    MenuDB.findByIdAndRemove(data._id).exec();
}

const Menu_list = (req, res) => {
    MenuDB.find()
    .then((result) => {
        result.toArray;

        res.send(result);
    });
}

module.exports = {
    Menu_add,
    Menu_del,
    Menu_list
}