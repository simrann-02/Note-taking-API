const express=require("express");
const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 4000

require('./config/database').connect();
app.use(express.json());

const notes=require('./routes/notes');
app.use("/api/v1",notes);

app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`);
})