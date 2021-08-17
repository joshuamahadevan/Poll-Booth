const router= require("express").Router()
const tokens=require("../modules/tokens")
const Team=require("../models/Team")

router.post("/new", tokens.authToken, async (req,res)=>{
    const team=new Team({
        name: req.body.name,
        admins: [ {Uid: req.user._id}],
        polls: []
    })
    const teamExists=Team.findOne({name:req.body.name})

    if(teamExists){
        res.status(400).send("team name already in  use")
    }else{
        const newTeam=team.save()
        res.send(newTeam)
    }

})

router.get("/new", (req,res)=>{
    res.send("new team - page")
})

router.get("/:name", (req,res)=>{
    res.send(`team of mame ${req.params.name} - page`)
})

router.get("/:name/new-poll", (req,res)=>{
    res.send(`new poll for team of mame ${req.params.name} - page`)
})

router.post("/:name/new-poll", (req,res)=>{
    res.send(`team of mame ${req.params.name} - page`)
})



router.get("/", (req,res)=>{
    res.redirect("/api/user")
})


module.exports=router