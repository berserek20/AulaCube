const mongoose = require('mongoose');
const { todo } = require('../database/database');
const taskType=[{
   
}];
        
const schema = new mongoose.Schema({
    title:String,
    taskDes: String,
    Status: {
        type:String,
        enum:["Completed", "pending","completed","Pending"],
        // default:"To Do"
    }    

})

module.exports = todo.model("todos",schema)