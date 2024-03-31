// importing the modules
const Post = require("../Module/posts");
const Like = require("../Module/likes");

// like a post
exports.likePost = async(req, res) => {
    try{
        // fetch the data from the body
        const {post, user} = req.body;

        // insert the data in likes
        const result = await Like.create({post, user});

        // now update the post based on the likes
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: result._id}}, {new: true})
                            .populate("likes").exec();
        res.json({
            post: updatedPost
        })
    }
    catch(error){
        return res.status(500).json({
            error: "error while liking the post"
        })
    }
}

exports.unlikePost = async(req, res) => {
    try{
        const {post, like} = req.body;

        // find & delete the like collections
        const deleteLike = await Like.findOneAndDelete({post:post, _id: like});

        // update the post collection from which we have deleted the like
        // pull is mainly used to delete
        const updatePost = await Post.findByIdAndUpdate(post, {$pull:{likes: deleteLike._id}},
                                                            {new: true})
    }
    catch(error){
        return res.status(500).json({
            error: "error while unliking the post"
        })
    }
}