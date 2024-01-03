const Note=require('../models/note');
exports.deleteNote=async(req,res)=>{
    try{
        const {id}=req.params;
        await Note.findByIdAndDelete(id);
        res.json({
            success:true,
            message:"Note deleted"
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error,note could not be deleted"
        })
    }
}