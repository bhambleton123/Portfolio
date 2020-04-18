const Comment = require("../db/models").Comment;
const User = require("../db/models").User;

const getCommentsByPostId = (req, res) => {
  Comment.findAll({
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password"],
        },
      },
    ],
    attributes: {
      exclude: ["userId"],
    },
    order: [["updatedAt", "DESC"]],
  })
    .then((comments) => res.send(comments))
    .catch((err) => res.status(500).send(err));
};

module.exports = {
  getCommentsByPostId,
};
