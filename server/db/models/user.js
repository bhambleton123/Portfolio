"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Post, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });

    User.hasMany(models.Comment, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };
  return User;
};
