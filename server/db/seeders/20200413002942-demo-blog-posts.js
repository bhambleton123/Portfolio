"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Posts", [
      {
        title: "It's raining outside",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Explicabo amet saepe tempore, similique reiciendis architecto vel! Expedita ipsum ipsam debitis tempora aut rem totam, molestiae placeat? Labore, sequi.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "It's sunny outside",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Explicabo amet saepe tempore, similique reiciendis architecto vel! Expedita ipsum ipsam debitis tempora aut rem totam, molestiae placeat? Labore, sequi.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "It's snowing outside",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Explicabo amet saepe tempore, similique reiciendis architecto vel! Expedita ipsum ipsam debitis tempora aut rem totam, molestiae placeat? Labore, sequi.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "It's hailing outside",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Explicabo amet saepe tempore, similique reiciendis architecto vel! Expedita ipsum ipsam debitis tempora aut rem totam, molestiae placeat? Labore, sequi.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
