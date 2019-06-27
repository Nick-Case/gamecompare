const database = require('./database');
const game = require('./game');
const shop = require("./shop");
const gameListing = require("./game-listing");


gameListing.belongsTo(game, {
    as: "game",
    onDelete : "CASCADE",
    foreignKey : {
        name : "gameId",
        field : "game_id",
        allowNull : false
    }
});

gameListing.belongsTo(shop, {
    as: "shop",
    onDelete : "CASCADE",
    foreignKey : {
        name : "shopId",
        field : "shop_id",
        allowNull : false
    }
});

module.exports = {
    database,
    game,
    shop,
    gameListing
};