const shop = require("../models/shop");

module.exports = {

    getAll: function () {
        return new Promise((res, rej) => {
            shop.findAll({})
                .then(res)
                .catch(err => {
                    rej(err);
                });
        });
    },

    getById: function (id) {
        return new Promise((res, rej) => {
            shop.findOne({
                where: { id }
            })
                .then(res)
                .catch(err => {
                    rej(err)
                });
        });
    },

    create: function (params) {
        return shop.create(params);
    }
};