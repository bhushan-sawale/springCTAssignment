const express = require('express')
const app = express();
const { sequelize } = require('./config/database.config');
const createUser = require("./services/userservices")
const createCompany = require("./services/companyservices")
const createuserCompany = require('./services/userCompnayservices')
const deletecompnay = require('./services/deleteCompnay')
const listUserCompnaies = require('./services/listUsersWithCompanies')

app.use(express.json())

// app.get('/user',(req,res)=>{
//     res.send({'message':"this is user api"})
// })

app.post("/user",createUser)
app.post("/company",createCompany)
app.post("/usercompany",createuserCompany)
app.delete("/deletecompnay/:id",deletecompnay)

//Not implemented
// app.get("/userCompanies/:id",listUserCompnaies)

app.listen(3000,()=>{
    console.log("Server started on port 3000")
})


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });