const mongoose=require("mongoose")
const pollSchema=mongoose.Schema({
    title:{
        type: String,
        required: true,
        min:6
    },
    description:{
        type: String,
        required: true
    },
    options:{
        type: [ String ],
        required: true
    },
    responses: [ {option: Number, Uid: String} ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model('Poll',pollSchema)