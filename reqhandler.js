export function getData(req,res){
    console.log("end point");
    res.status(200).send("Hai")
    
}

export function postData(req,res){
    console.log("end point");
    console.log(req.body);
    res.status(200).send("connected")
    
    
}