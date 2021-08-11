const mongoose=require("mongoose")
const teamSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
        min:6
    },
    admins:[ { id: String }],
    polls:[ { id: String }],
})

module.exports=mongoose.model('Team',teamSchema)