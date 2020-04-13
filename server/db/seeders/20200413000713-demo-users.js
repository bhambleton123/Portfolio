"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return bcrypt
      .hash("password123", 10)
      .then((hash) => {
        return queryInterface.bulkInsert("Users", [
          {
            firstName: "Brian",
            lastName: "Hambleton",
            username: "God",
            password: hash,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            firstName: "John",
            lastName: "Doe",
            username: "johndoe",
            password: hash,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
