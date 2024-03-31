// import the post module
const Post = require("../Module/posts");

exports.createPost = async(req, res) => {
    try{
        // fetch the data from the request body
        const {title, body} = req.body;


        // insert the data in the module
        const result = await Post.create({title, body});

        res.json({
            post:result
        })
    }
    
    catch(error){
        return res.send(400).json({
            error: "Error while creating the post"
        })
    }
}

exports.getAllPosts = async(req, res) => {
    try{
        const result = await Post.find().populate("comments").populate("likes").exec();

        res.json({
            result
        })
    }

    catch(error){
        return res.send(400).json({
            error: "Error while creating the post"
        })
    }
    
}