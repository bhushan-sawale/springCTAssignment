let sequelize = require('../config/database.config')
let Company = require('../models/company')



const createCompany = async(req,res)=>{
    let company = await Company.create(req.body)
    res.send(company)
}

module.exports = createCompany 