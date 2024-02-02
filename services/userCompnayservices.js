let sequelize = require('../config/database.config')
let UserCompany = require('../models/userCompany')



const createuserCompany = async(req,res)=>{
    let usercompany = await UserCompany.create(req.body)
    console.log("🚀 ~ createuserCompany ~ usercompany:", usercompany)
    res.send(usercompany)
}

module.exports = createuserCompany 