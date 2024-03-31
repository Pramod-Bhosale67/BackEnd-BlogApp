const mongoose = require('mongoose');

/* this schema mainly tell the 2 things

    1.on which post perons has liked
    2. who has commented
*/

const likeSchema = new mongoose.Schema({
    post:{
        // when one module(schema) is refering to other module(schema)
        // we use the Object.id
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post",  //this module is refering to the post mdoule to the specific 
        // module using the id
    },

    user:{
        type:String,
        required: true
    },

});

// likeSchema is exported as like
module.exports = mongoose.model('like', likeSchema);