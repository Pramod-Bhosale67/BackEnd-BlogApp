const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    body:{
        type:String,
        required:true,
    },

    // array of likes. This mainly tells us who/how many people have liked the post
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "like"
    }],

    // array of comments. This mainly tells us who/how many people have commented the post
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }]

})


module.exports = mongoose.model('Post', postSchema);
