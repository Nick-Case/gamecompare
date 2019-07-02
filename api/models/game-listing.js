const Sequelize = require("sequelize");
const database = require("./database");
const game = require("./game");

const gameListing = database.define("gameListing", {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        field: "id",
        allowNull : false,
    },
    identifier : {
        type : Sequelize.STRING,
        field : "indentifier",
        allowNull : false
    },
});

module.exports = gameListing;