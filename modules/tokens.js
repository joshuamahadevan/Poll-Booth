const jwt=require("jsonwebtoken")
require('dotenv').config()

function authToken(req,res,next){
    const authHeader=req.headers['autherization']
    const token= authHeader && authHeader.split(" ")[1]

    if(token==null){
        res.redirect(/api/user/login)
        next();
    }
    jwt.verify(token, process.env.SERVER_SECRET, (err,user) =>{
        if(err) return res.status(403).send("invalid token")
        req.user=user
        next() 
    })

}

module.exports.authToken=authToken