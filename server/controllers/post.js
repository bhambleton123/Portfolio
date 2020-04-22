require("dotenv").config();
const Post = require("../db/models").Post;
const User = require("../db/models").User;
const Comment = require("../db/models").Comment;
const AWS = require("../util/aws-config");

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
    order: [["updatedAt", "DESC"]],
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
      {
        model: Comment,
        attributes: ["id", "content", "createdAt", "updatedAt"],
        include: [
          {
            model: User,
            attributes: {
              exclude: ["password"],
            },
          },
        ],
      },
    ],
    order: [[Comment, "updatedAt", "DESC"]],
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

const uploadAndReceiveImage = (req, res) => {
  let s3 = new AWS.S3();

  let data = {
    Bucket: process.env.AWS_S3_BUCKET,
    Body: req.file.buffer,
    ContentEncoding: "base64",
    ContentType: "image/*",
    Key: `blog_images/${req.file.originalname}`,
  };

  s3.putObject(data, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(
        s3.getSignedUrl("getObject", {
          Bucket: process.env.AWS_S3_BUCKET,
          Key: `blog_images/${req.file.originalname}`,
        })
      );
    }
  });
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
    Comment.destroy({
      where: {
        postId: req.params.postId,
      },
    })
      .then((comment) => {
        Post.destroy({
          where: {
            id: req.params.postId,
          },
        })
          .then((post) => res.send(`Post ${req.params.postId} deleted`))
          .catch((err) => res.status(500).send(err));
      })
      .catch((err) => res.status(500).send(err));
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  uploadAndReceiveImage,
  editPost,
  deletePost,
};
