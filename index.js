const express=require("express");
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
let path=require("path")
app.set("views",path.join(__dirname,"/views"))
let port=3000;
app.listen(port,()=>{
    console.log("server is working")
})
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    let ram=Math.floor(Math.random()*10)+1
    res.render("form",{ram})
})
app.post("/catfacts",(req,res)=>{
    console.log(req.body)
    res.render("catFacts")
})
app.post("/calculator",(req,res)=>{
    res.render("smallCalculator")
})
app.post("/todolist",(req,res)=>{
    res.render("todoList")
})
app.post("/result",(req,res)=>{
    res.render("result")
})