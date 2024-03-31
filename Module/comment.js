const mongoose = require('mongoose');

/* this schema mainly tell the 3 things

    1.on which post perons has commented
    2. who has commented
    3. what has commented
*/

const commentSchema = new mongoose.Schema({
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

    body:{
        type:String,
        required: true
    }
});

// commentSchema is exported as comment
module.exports = mongoose.model('comment', commentSchema);