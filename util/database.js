const { Sequelize } = require('sequelize');
const { dbConfig } = require('../config/appConfig');
const { username, password, database } = dbConfig.credentials;

const sequelize = new Sequelize(database, username, password, dbConfig.env);
sequelize.sync({ alter: true });
module.exports = sequelize;

