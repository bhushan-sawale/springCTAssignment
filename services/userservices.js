let sequelize = require('../config/database.config')
let User = require('../models/user')

const createUser = async(req,res)=>{
    let user = await User.create(req.body)
    res.send(user)
}

module.exports = createUser 