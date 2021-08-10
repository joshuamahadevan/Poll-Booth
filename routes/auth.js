const router= require("express").Router()
const bcrypt=require("bcryptjs")
const User=require("../models/User")

router.post("/register", async (req,res)=>{
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
    res.send("register-page")
})

router.post("/login", async (req,res)=>{
    if(!req.body.email || !req.body.password){
        res.status(400).send("enter both email and password")
    }else{
        const entry=await User.findOne({email:req.body.email})
        if(!entry){
            res.status(400).send("email doesnot exist")
        }else{
            const validPassword=await bcrypt.compare(req.body.password, entry.password)
            if(!validPassword){
                res.status(400).send("wrong password")
            }else{
                res.send("logged in ig")
            }            
        }
    }
})

router.get("/login", (req,res)=>{
    res.send("login-page")
})

router.get("/", (req,res)=>{
    res.send("user - dashboard")
})


module.exports=router