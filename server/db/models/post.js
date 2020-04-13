"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Post.associate = function (models) {
    // associations can be defined here
    Post.hasMany(models.Comment, {
      foreignKey: "postId",
      onDelete: "CASCADE",
    });

    Post.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };
  return Post;
};
