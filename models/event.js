const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "pname":{type:String,required:true},
        "Drname":{type:String,required:true},
        "date":{type:String,required:true},
        "speciality":{type:String,required:true},
        "page":{type:String,required:true},
        "pgender":{type:String,required:true}
        
        
    }
)

let eventmodel=mongoose.model("event",schema);
module.exports={eventmodel}
