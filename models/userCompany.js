const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.config");
const User = require('./user')
const Company = require('./company')

const UserCompany = sequelize.define("UserCompany", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User, 
      key: 'id'
    }
  },
  company_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Company, 
      key: 'id'
    }
    
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("usercompany table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to usercompany table : ", error);
  });

module.exports = UserCompany;
