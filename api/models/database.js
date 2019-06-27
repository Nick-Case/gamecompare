const Sequelize = require("sequelize");

const db = new Sequelize(
    process.env.API_DB_DB,
    process.env.API_DB_USER,
    process.env.API_DB_PASS,
    {
        host : process.env.API_DB_HOST,
        port : process.env.API_DB_PORT,
        dialect : 'postgres'
    }
);

module.exports = db;