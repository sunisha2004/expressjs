const express= require("express")
const bodyparser=require("body-parser")
const app=express();
const path=require("path")
const PORT=3000
app.use(express.urlencoded())


app.get('/',(req,res)=>{
    console.log(req.url);
    
    
    console.log(__dirname);
    
    res.status(200).sendFile(path.join(__dirname,"frontend","index.html"))
});



app.get('/css/style.css',(req,res)=>{
    console.log(req.url);
    
    
    console.log(__dirname);
    
    res.status(200).sendFile(path.join(__dirname,"frontend/css","style.css"))
});



app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
    
})