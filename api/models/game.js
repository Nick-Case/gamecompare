const Sequelize = require('sequelize');
const database = require('./database');

const gameListing = require("./game-listing");

const game = database.define("game", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: false,
    },
    desc: {
        type: Sequelize.TEXT,
        field: 'desc',
        allowNull: false,
    },
    type: {
        type: Sequelize.INTEGER,
        field: 'type',
        allowNull: false,
    },
});

game.hasMany(gameListing, { as : "listings", foreignKey : "gameId"});
gameListing.belongsTo(game);

module.exports = game;
