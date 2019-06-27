const Sequelize = require("sequelize");
const database = require("./database");

const shopListing = database.define("shopListing", {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        field: "id",
        allowNull : false,
    }
});

module.exports = shopListing;