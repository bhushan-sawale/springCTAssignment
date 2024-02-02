let sequelize = require("../config/database.config");
let User = require("../models/user");
let Company = require("../models/company");
let userCompany = require("../models/userCompany");

const listUserCompnaies = async (req, res) => {
  let user = await User.findByPk(req.params.id);
  let companies = await userCompany.findAll({
    where: {
      user_id: req.params.id,
    },
  });

  let result = new Promise((resolve)=>{
    let data = []
    companies.forEach(async (item)=>{
        await Company.findAll({
            where:{
                id: item.dataValues.company_id
            }
        })
    })
    resolve(data)
  })
  result.then((data) => {
      console.log("🚀 ~ result.then ~ data:", data)
      res.send({ user: user, companies: data});
  })
  

//   console.log("🚀 ~ listUserCompnaies ~ companies:", companies[0].dataValues.company_id)

  
};

module.exports = listUserCompnaies;
