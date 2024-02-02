const { DataTypes } = require("sequelize");
const { sequelize } = require('../config/database.config');
let User = require('./user');

const Company = sequelize.define("Company", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Company.belongsToMany(User, {
//   through: "userCompnay",
//   as: "User",
//   foreignKey: "company_id",
// });

sequelize
  .sync()
  .then(() => {
    console.log("company table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to company table : ", error);
  });

module.exports = Company;
