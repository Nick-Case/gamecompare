const Sequelize = require("sequelize");
const database = require("./database");

const gameListingPrice = database.define("gameListingPrice", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "id",
        allowNull: false,
    },
    price : {
        type : Sequelize.DECIMAL,
        field : "price",
        allowNull : false,
    },
});

module.exports = gameListingPrice;