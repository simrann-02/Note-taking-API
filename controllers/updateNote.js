const Note=require('../models/note');

exports.updateNote=async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,content}=req.body;
        const note=await Note.findByIdAndUpdate({_id:id},{title,content,lastModificationAt:Date.now()})
        res.status(200).json({
            success:true,
            data:note,
            message:"Updated Successfully"
        })
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Trying to modify non-existent note"
        })
    }
}