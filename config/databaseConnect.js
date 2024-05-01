const mongoose = require('mongoose')
require('dotenv').config()
const dbConnect = ()=>{
     mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database connection established.")
    })
    .catch((error)=>{
        console.error("Error encountered. DB connection broken. ",error.message)
    })
}
module.exports = dbConnect