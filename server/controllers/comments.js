const Comment = require("../db/models").Comment;

const createComment = (req, res) => {
  if (!req.user) {
    res.status(401).send("Unauthorized");
  } else {
    Comment.create({
      content: req.body.content,
      postId: req.params.postId,
      userId: req.user.id,
    })
      .then((comment) => {
        res.send({ created: comment });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

const updateComment = (req, res) => {
  if (!req.user) {
    res.status(401).send("Unauthorized");
  } else {
    Comment.update(
      { content: req.body.content },
      {
        where: {
          id: req.params.commentId,
          userId: req.user.id,
          postId: req.params.postId,
        },
      }
    )
      .then((comment) => {
        res.send({ updated: comment });
      })
      .catch((err) => res.status(500).send(err));
  }
};

const deleteComment = (req, res) => {
  if (!req.user) {
    res.status(401).send("Unauthorized");
  } else {
    Comment.destroy({
      where: {
        id: req.params.commentId,
        userId: req.user.id,
        postId: req.params.postId,
      },
    })
      .then((comment) => {
        res.send({ deleted: comment });
      })
      .catch((err) => res.status(500).send(err));
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
};
