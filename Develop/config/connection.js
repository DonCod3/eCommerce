require('dotenv').config();

let Sequelize = require('sequelize');

const URI = process.env.MYSQLURI || process.env.JAWSDB_URL;
const sequelize = new Sequelize(URI, {
  dialect: 'mysql'
});

module.exports = sequelize;
