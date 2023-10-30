const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book_routes')

const mongo = "mongodb+srv://saranTest:saranTest%40001@cluster0.qh0yccu.mongodb.net/BackendChallenge?retryWrites=true&w=majority";


const app = express();
app.use(express.json());
app.use("/book",router)

mongoose.connect(mongo);
 

app.listen(3000,()=>{
    console.log("server is running")
})