const express = require('express');
const router = express.Router();

// importing the comment controller
const {createComment} = require("../Controllers/commentController");

// importing the post controller to create the post
const {createPost} = require("../Controllers/postController");

// import the post controller to get all the posts 
const {getAllPosts} = require("../Controllers/postController");

// importing the likes controller
const {likePost} = require("../Controllers/likeController");

// import the controller to inlike the post
const {unlikePost} = require("../Controllers/likeController")


// creating the route for the comment
router.post("/comments/create", createComment);

// creating the route to insert the post
router.post("/posts/create", createPost);

// creating the route to fetch all the posts
router.get("/posts", getAllPosts) 

// update the likes 
router.post("/likes/like", likePost);

// delete the likes
router.post("/likes/unlike", unlikePost);

module.exports = router;