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
app.get("/view",(req,res)=>{
    eventmodel.find().then(
        (data)=>{
            res.json(data)
            
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
app.post("/search",(req,res)=>{
    let input=req.body
    eventmodel.find(input).then(
        (data)=>{
            res.json(data)
            
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
        
})
app.post("/delete",(req,res)=>{
    let input=req.body
    eventmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
            }
    ).catch(
        (error)=>{
            res.json({status:"error"})
        }
    )
    
})



app.listen(8080,()=>{
    console.log("server started")
})