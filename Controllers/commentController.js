// import the modules
const Post = require("../Module/posts");
const comment = require("../Module/comment");


exports.createComment = async(req, res) => {
    try{
        // fetch data from request body
        const {post, user, body} = req.body;

        // now insert/create the comment
        const result = await comment.create({post, user, body});

        // find the post by id, and insert the comment in it's comment array
        /*
            1. post -> we are searching by id post
            2. $push is mainly used to update and $pull is mainly used to delete
            3. $push: {comments: result._id} this mainly pushes the comment in
                      in the comment array of post with given id
            4. {new: true} it mainly returns the updated documents after inserting the 
                        comment. If we dont write it, then we will get the old doc.
                        in which no comment is present which was recently inserted
        */

        // populate mainly used to find the documents using the id
        // if we dont populate it, then it will show ony the id rather than the actual comment
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: result._id}}, {new: true})
                                .populate("comments")
                                .exec();

        res.status(200).json({
            post:updatedPost
        })
    }catch(error){
        return res.status(500).json({
            error: "error while creating the comment"
        })
    }
}