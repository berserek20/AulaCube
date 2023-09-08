const dotenv=require('dotenv')
const mongoose = require('mongoose')
dotenv.config();
const dbName = process.env.dbName;
const password = process.env.password;
    const url=`mongodb+srv://${dbName}:${password}@cluster0.xyxflmu.mongodb.net/?retryWrites=true&w=majority`

    module.exports.todo=mongoose.createConnection(url);