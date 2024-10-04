const express=require("express");

const app=express();

const PORT=3000;

app.get('/',(req,res)=>{
    res.send("Hello world")
})


app.get('/about',(req,res)=>{
    res.send("about page")
})

app.get('*',(req,res)=>{
    res.send("404 page not found")
})



app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
    
})