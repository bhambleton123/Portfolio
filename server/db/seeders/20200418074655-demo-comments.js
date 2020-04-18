"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Comments", [
      {
        content: "Wow, profound post!",
        postId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "Great post!",
        postId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "You're so informative!",
        postId: 3,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "Wow, profound post!",
        postId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "Wow, profound post!",
        postId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "Wow, profound post!",
        postId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "Wow, profound post!",
        postId: 3,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "Wow, profound post!",
        postId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
