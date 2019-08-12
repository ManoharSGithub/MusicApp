console.log("hello");
const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const morgan=require("morgan");
const app=express();
const port=8081;
app.use(morgan("combined"));
app.use(bodyparser.json());
app.use(cors());

app.post('/register',(req,res)=>{

res.send({
    message:'Hello '+ req.body.email+'! Your User Registered!'
});
});

app.listen(port,port);
