const gameListing = require("../models/game-listing");
const game = require("../models/game");

module.exports = {

    search: function (query) {
        return new Promise((res, rej) => {
            gameListing.findAll({
                where: query,
                include : [{all : true}]
            })
                .then(res)
                .catch(err => {
                    rej(err);
                });
        });
    },

    getById: function (id) {
        return new Promise((res, rej) => {

            gameListing.findOne({
                where: { id }
            })
                .then(res)
                .catch(err => {
                    rej(err)
                });
        });
    },

    create: function (params) {
        return new Promise((res, rej) => {
            gameListing.create(params)
                .then(res)
                .catch(err => {
                    console.error(err);
                    rej(err);
                });
        });
    }
};