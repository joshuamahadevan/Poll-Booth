const router= require("express").Router()

router.post("/register", (req,res)=>{
    res.send("register")
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