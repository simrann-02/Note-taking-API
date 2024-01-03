const Note=require('../models/note');

exports.createNote=async(req,res)=>{
    try{
        const {title,content}=req.body;
        const response=await Note.create({title,content});
        res.status(200).json({
            success:true,
            data:response,
            message:"Note created successfully"
        })
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({
            success:false,
            data:"invalid input",
            message:err.message
        })
    }
}