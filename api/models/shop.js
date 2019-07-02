const Sequelize = require('sequelize');
const database = require('./database');
const gameListing = require("./game-listing");

    const shop = database.define('shop', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        field : 'id',
        allowNull : false,
    },
    name : {
        type : Sequelize.STRING,
        field : 'name',
        allowNull : false,
    },
    baseUrl : {
        type : Sequelize.STRING,
        field : 'base_url',
        allowNull : false,
    },
}, { underscored : true});

//Associations
shop.hasMany(gameListing, { as : "listings", foreignKey : "shopId"});
gameListing.belongsTo(shop);


module.exports = shop;
