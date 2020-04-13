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
  })
    .then((posts) => res.send(posts))
    .catch((err) => res.status(500).send(err));
};

const createPost = (req, res) => {
  if (!req.user || req.user.username !== process.env.ADMIN_USERNAME) {
    res.status(401).send("User unauthorized to create a post");
  } else {
    Post.create({
      title: req.body.title,
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
    if (!req.body.content) {
      Post.update(
        { title: req.body.title },
        {
          where: {
            id: req.params.postId,
          },
        }
      )
        .then((post) => res.send(`Post ${post[0]} edited`))
        .catch((err) => res.status(500).send(err));
    } else if (!req.body.title) {
      Post.update(
        { content: req.body.content },
        {
          where: {
            id: req.params.postId,
          },
        }
      )
        .then((post) => res.send(`Post ${post[0]} edited`))
        .catch((err) => res.status(500).send(err));
    } else if (req.body.title && req.body.content) {
      Post.update(
        { title: req.body.title, content: req.body.content },
        {
          where: {
            id: req.params.postId,
          },
        }
      )
        .then((post) => res.send(post))
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(422).send("Bad request data, post not edited");
    }
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

module.exports = { createPost, getPosts, editPost, deletePost };
