const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.config');

let Company = require('./company')


const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  });

//   User.belongsToMany(Company, {
//     through: "userCompany",
//     as: "Company",
//     foreignKey: "userId",
//   });

  sequelize.sync().then(() => {
    console.log('user table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });

  module.exports = User