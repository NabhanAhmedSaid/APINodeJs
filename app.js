const express = require('express');
const app = express();

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});

app.get("/info",(req,res,next)=>{
    res.json({"My API":"1234"})
});
app.use(express.json());
app.post("/Post",(req,res,next)=>{
    const message = req.body.message;
res.json({"Post": message});
});