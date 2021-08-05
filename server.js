const express=require("express")
const app=express()
const mongoose=require("mongoose")

//connection to database
mongoose.connect("mongodb+srv://express-user:Monkey1234@poll-booth.byvp5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true },  
    ()=> console.log("connected to db"))

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

app.listen(3000, console.log("up and running"))