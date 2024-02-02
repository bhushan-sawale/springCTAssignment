const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'bhushan' ,
  password: 'password' ,
  database: 'usercompany',
});

module.exports = { sequelize };