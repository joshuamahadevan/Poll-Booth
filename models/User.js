const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
        min:6
    },
    email:{
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('User',userSchema)