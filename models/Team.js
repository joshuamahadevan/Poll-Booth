const mongoose=require("mongoose")
const teamSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
        min:6,
        unique: true
    },
    admins:[ { Uid: String }],
    polls:[ { Pid: String }],
})

module.exports=mongoose.model('Team',teamSchema)