const mongoose=require('mongoose');

const noteSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        content:{
            type:String,
            required:true,
            maxLength:50
        },
        createdAt:{
            type:Date,
            required:true,
            default: Date.now()
        },
        lastModificationAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
    }
)
module.exports=mongoose.model("Note", noteSchema);