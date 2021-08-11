const router= require("express").Router()
const bcrypt=require("bcryptjs")
const User=require("../models/User")
const jwt=require("jsonwebtoken")
require('dotenv').config()

router.post("/register", async (req,res)=>{
    console.log("post request from login form")
    console.log(req.body)
    if(!req.body.email || !req.body.email || !req.body.email){
        res.status(400).send("enter all values")
    }else{
        const emailExists=await User.findOne({email:req.body.email})
        
        if(emailExists){
            res.status(400).send("email already exists")
        }else{
            const salt=await bcrypt.genSalt(10)
            const hashedPassword=await bcrypt.hash(req.body.password,salt)

            const user= new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })
            const savedUser=await user.save();
            res.send(savedUser)

        }
    }

})

router.get("/register", (req,res)=>{
    res.render('register')
})

router.post("/login", async (req,res)=>{
    const user_db=await User.findOne({email:req.body.email})
    if(!user_db){
        res.status(400).send("email doesnot exist")
    }else{
        const validPassword=await bcrypt.compare(req.body.password, user_db.password)
        if(!validPassword){
            res.status(400).send("wrong password")
        }else{
            const token=jwt.sign({
                name: user_db.name,
                email:user_db.email
            }, process.env.SERVER_SECRET)
            res.json({accessToken:token})
        }            
    }
})

router.get("/login", (req,res)=>{
    res.render("login")
})

router.get("/", (req,res)=>{
    res.send("user - dashboard")
})


module.exports=router