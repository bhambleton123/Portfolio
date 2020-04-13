require("dotenv").config();
const Post = require("../db/models").Post;
const User = require("../db/models").User;

const getPosts = (req, res) => {
  Post.findAll({
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password"],
        },
      },
    ],
    attributes: {
      exclude: ["content", "userId"],
    },
  })
    .then((posts) => res.send(posts))
    .catch((err) => res.status(500).send(err));
};

const getPostById = (req, res) => {
  Post.findOne({
    where: {
      id: req.params.postId,
    },
    attributes: {
      exclude: ["userId"],
    },
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password"],
        },
      },
    ],
  })
    .then((post) => res.send(post))
    .catch((err) => res.status(500).send(err));
};

const createPost = (req, res) => {
  if (!req.user || req.user.username !== process.env.ADMIN_USERNAME) {
    res.status(401).send("User unauthorized to create a post");
  } else {
    Post.create({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      userId: req.user.id,
    })
      .then((post) => {
        res.send({ "Post created": post });
      })
      .catch((err) => res.status(500).send(err));
  }
};

const editPost = (req, res) => {
  if (!req.user || req.user.username !== process.env.ADMIN_USERNAME) {
    res.status(401).send("User unauthorized to edit post");
  } else {
    Post.update(
      {
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.postId,
        },
      }
    )
      .then((post) => {
        res.send(`Post ${req.params.postId} edited`);
      })
      .catch((err) => res.status(500).send(err));
  }
};

const deletePost = (req, res) => {
  if (!req.user || req.user.username !== process.env.ADMIN_USERNAME) {
    res.status(401).send("User unauthorized to delete post");
  } else {
    Post.destroy({
      where: {
        id: req.params.postId,
      },
    })
      .then((post) => res.send(`Post ${req.params.postId} deleted`))
      .catch((err) => res.status(500).send(err));
  }
};

module.exports = { createPost, getPosts, getPostById, editPost, deletePost };
