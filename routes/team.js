const router= require("express").Router()

router.post("/new", (req,res)=>{
    res.send("new team")
})

router.get("/new", (req,res)=>{
    res.send("new team - page")
})

router.post("/:id", (req,res)=>{
    res.send(`team of id ${req.params.id}`)
})

router.get("/:id", (req,res)=>{
    res.send(`team of id ${req.params.id} - page`)
})



router.get("/", (req,res)=>{
    res.redirect("/api/user")
})


module.exports=router