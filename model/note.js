const mongoose=require('mongoose');

const Note=mongoose.Schema({
    title:String,
    description:String

})


module.exports=mongoose.model('Note',Note);