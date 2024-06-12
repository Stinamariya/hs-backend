const express = require("express")
const mongoose= require("mongoose")
const cors= require("cors")
const {eventmodel}=require("./models/event")
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://stina:stina2006@cluster0.rfrzosg.mongodb.net/eventdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let event=new eventmodel(input)
    event.save()
    res.json({status:"success"})
})


app.listen(8081,()=>{
    console.log("server started")
})