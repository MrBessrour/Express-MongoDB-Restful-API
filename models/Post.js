const mongoose = require('mongoose');

//post schema for mongoDB (post model)
const PostSchema = mongoose.Schema({
    title : {
        type : String ,
        required : true ,
    },
    description : {
        type : String ,
        required : true ,
    },
    date : {
        type : Date ,
        default : Date.now ,
    },
});

module.exports = mongoose.model('Posts' , PostSchema);