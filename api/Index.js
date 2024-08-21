import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

const app = express()
const db = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"admin",
    database:"gameblog"
})


//middleware
app.use(cors())






app.listen(4150,() => {
    console.log("Server Online")
    console.log("http://localhost:4150")
})

app.get("/",(req,res) => {
    res.json("Server is Running on port 4150")
})