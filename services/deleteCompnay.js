let Company = require('../models/company')

const createUser = async(req,res)=>{
    let company =  Company.destroy({
        where:{
            id: req.params.id
        }
    }).then((data) => {
        console.log("🚀 ~ createUser ~ data:", data)
        return {
            "message":data
    }
        
    }).catch((error) => {
        console.log("🚀 ~ createUser ~ error:", error)
        return {
            "error": error
    }
    })
    res.send(company)
}

module.exports = createUser 