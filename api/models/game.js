const Sequelize = require('sequelize');
const database = require('./database');

    const game = database.define("game", {
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
    desc : {
        type : Sequelize.TEXT,
        field : 'desc',
        allowNull : false,
    },
    type : {
        type : Sequelize.INTEGER,
        field : 'type',
        allowNull : false,
    },
});

module.exports = game;
