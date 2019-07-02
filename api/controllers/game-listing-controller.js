const gameListing = require("../models/game-listing");
const game = require("../models/game");

const searchableItems = ["shopId", "gameId"];

module.exports = {

    search: function (req, res) {
        return new Promise((res, rej) => {

            var searchParams = {};

            for (const key in req.query) {
                if (searchableItems.includes(key)) {
                    searchableItems.push(req.query[key]);
                }
            }

            gameListing.findAll({
                where: searchParams,
                include : [{all : true}],
                limit : req.query.limit,
                offset : req.skip
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