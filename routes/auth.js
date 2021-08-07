const router= require("express").Router()
const bcrypt=require("bcryptjs")
const User=require("../models/User")

router.post("/register", async (req,res)=>{

    const emailExists=await User.findOne({email:req.body.email})
    
    if(emailExists){
        res.status(400).send("email already exists")
    }

    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(req.body.password,salt)

    const user= new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    try{
        const savedUser=await user.save();
        res.send(savedUser)
        
    }catch (err){
        res.status(400).send(err)
    }


})

router.get("/register", (req,res)=>{
    res.send("register-page")
})

router.post("/login", (req,res)=>{
    res.send("login")
})

router.get("/login", (req,res)=>{
    res.send("login-page")
})

router.get("/", (req,res)=>{
    res.send("user - dashboard")
})


module.exports=router