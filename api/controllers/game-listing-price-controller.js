const gameListingPrice = require("../models/game-listing-price");

module.exports = {

    search : function(query) {
        return new Promise((res, rej) => {
            gameListingPrice.findAll(query)
            .then(res)
            .catch(err => {
                rej(err);
            });
        });
    },

    getById : function(id) {
        return new Promise((res, rej) => {
            gameListingPrice.findOne({
                where : { id}
            })
            .then(res)
            .catch(err => {
                rej(err);
            });
        });
    },

    create : function(params) {
        return gameListingPrice.create(params);
    }
}