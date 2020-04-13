"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Posts", [
      {
        id: 1,
        title: "It's raining outside",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Explicabo amet saepe tempore, similique reiciendis architecto vel! Expedita ipsum ipsam debitis tempora aut rem totam, molestiae placeat? Labore, sequi.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "It's sunny outside",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Explicabo amet saepe tempore, similique reiciendis architecto vel! Expedita ipsum ipsam debitis tempora aut rem totam, molestiae placeat? Labore, sequi.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "It's snowing outside",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Explicabo amet saepe tempore, similique reiciendis architecto vel! Expedita ipsum ipsam debitis tempora aut rem totam, molestiae placeat? Labore, sequi.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
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
    queryInterface.bulkDelete("Posts", null, {});
  },
};
