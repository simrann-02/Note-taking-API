const Note=require('../models/note');

exports.getNote=async(req,res)=>{
    try{
        const notes=await Note.find({});
        res.status(200).json({
            success:true,
            data:notes,
            message:"All notes have been fetched"
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Notes could not be fetched"
        })
    }
}

exports.getNoteById=async(req,res)=>{
    try{
        const id=req.params.id;
        const note=await Note.findById({_id:id});
        if(!note){
            return res.status(400).json({
                success:false,
                message:"Trying to access non-existent note"
            })
        }
        res.status(200).json({
            success:true,
            data:note,
            message:`Note ${id} data successfully fetched`
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"could not fetch note"
        })
    }
}
