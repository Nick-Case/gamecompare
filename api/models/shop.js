const Sequelize = require('sequelize');
const database = require('./database');

    const shop = database.define("shop", {
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
    baseurl : {
        type : Sequelize.STRING,
        field : 'desc',
        allowNull : false,
    },
});

module.exports = shop;
