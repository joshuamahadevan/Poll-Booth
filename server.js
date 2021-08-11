const express=require("express")
const app=express()
const mongoose=require("mongoose")
require('dotenv').config()

//using json for requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// using ejs as view engine
app.set('view engine','ejs')

//static files
app.use(express.static("public"))

//connection to database
//dbName Users
mongoose.connect(process.env.DB_CONNECT_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex:true},  
    ()=> app.listen(3000, console.log("connected to db" , "up and running")))

//import routes
const authRoute=require("./routes/auth")
const teamRoute=require("./routes/team")

//route middleware
app.use('/api/user', authRoute)
app.use('/api/team', teamRoute)

//home route redirected to user home route
app.get("/", (req,res)=>{
    res.redirect("/api/user")
})

//catch others to return 404 error
app.use((req,res)=>{
    res.status(404).send("404 error")
})

