"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      content: DataTypes.TEXT,
      postId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      foreignkey: "userId",
      as: "author",
    });

    Comment.belongsTo(models.Post, {
      foreignKey: "postId",
      as: "post",
    });
  };
  return Comment;
};
