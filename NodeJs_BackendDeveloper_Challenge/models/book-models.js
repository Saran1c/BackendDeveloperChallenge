const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    title:{
        require:true,
        type:String,
    },
    author:{
        require:true,
        type:String
    },
    summary:{
        require:true,
        type:String
    }
})

module.exports = mongoose.model('books',dataSchema);