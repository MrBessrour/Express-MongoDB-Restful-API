const express = require("express");
const router = express.Router();
const Post = require('../models/Post');


//return all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ messege: err });
    }
});

//return one post 
router.get('/:postID', async (req, res) => {
    try {
        const onePost = await Post.findById(req.params.postID);
        res.json(onePost);
    } catch (err) {
        res.json({ messege: err });
    }
});

//remove one post 

router.delete('/:postID', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postID });
        res.json(removedPost);
    } catch (err) {
        res.json({ messege: err });
    }
});

//update post 
router.patch('/:postID', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postID }, { $set: { title: req.body.title } });
        res.json(updatedPost);
    } catch (err) {
        res.json({ messege: err });
    }
});

//add new post (promise style)
router.post('/', (req, res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.send(err);
        })
});

module.exports = router;