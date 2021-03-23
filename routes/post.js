const express = require("express");
const router = express.Router();
const Post = require('../models/Post');


//return all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ messege: err });
    }
});

//return one post 
router.get('/:postID', async (req, res) => {
    try {
        const onePost = await Post.findById(req.params.postID);
        res.status(200).json(onePost);
    } catch (err) {
        res.status(400).json({ messege: err });
    }
});

//remove one post 

router.delete('/:postID', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postID });
        res.status(202).json(removedPost);
    } catch (err) {
        res.status(400).json({ messege: err });
    }
});

//update post 
router.patch('/:postID', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postID }, { $set: { title: req.body.title } });
        res.status(201).json(updatedPost);
    } catch (err) {
        res.status(400).json({ messege: err });
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
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

module.exports = router;