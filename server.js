const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(express.json())

const router = require("./routes/routes.js")
app.use("/api", router)

app.listen(port, ()=>{
    console.log("Server is up and listening on ",port)
})

const dbConnection = require('./config/databaseConnect.js')
dbConnection()

app.get("/", (req, res)=>{
     res.send("<h1>Welcome to the backend of the blogging app</h1>")
})