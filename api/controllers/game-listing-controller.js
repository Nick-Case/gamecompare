const shopListing = require("../models/game-listing");

module.exports = {

    search: function (query) {
        return new Promise((res, rej) => {
            shopListing.findAll(query)
                .then(res)
                .catch(err => {
                    rej(err);
                });
        });
    },

    getById: function (id) {
        return new Promise((res, rej) => {

            shopListing.findOne({
                where: { id }
            })
                .then(res)
                .catch(err => {
                    rej(err)
                });
        });
    },

    create: function (params) {
        return shopListing.create(params);
    }
};