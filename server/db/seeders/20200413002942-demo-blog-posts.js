"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Posts", [
      {
        title: "It's raining outside",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Explicabo amet saepe tempore, similique reiciendis architecto vel! Expedita ipsum ipsam debitis tempora aut rem totam, molestiae placeat? Labore, sequi.",
        content: `{"blocks":[{"key":"8kit6","text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi omnis. Culpa optio amet laboriosam voluptatem nisi dolor aliquam a eveniet error facilis rerum ipsum officiis fugit, quo omnis vero?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4ntr2","text":"Eum laborum, saepe molestiae, distinctio possimus quam, nobis itaque officiis quisquam tenetur delectus porro. Cumque, praesentium odio dolores dignissimos earum maiores exercitationem cupiditate debitis repellendus impedit optio itaque dolore molestias.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1psuj","text":"Maxime nam cupiditate delectus dolore temporibus, libero voluptate voluptatibus aut esse assumenda illum porro provident nobis quibusdam adipisci itaque, culpa modi incidunt minus similique. Deleniti, dolores magni. Mollitia, expedita praesentium!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aq3hl","text":"Exercitationem mollitia eum eveniet impedit alias? Beatae fuga fugit ipsa qui molestiae nam quasi error, nihil excepturi at veniam officiis quibusdam molestias earum iusto, rerum vel ex sunt sed mollitia?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cfhpi","text":"Quam pariatur sint est odio, autem quo qui eveniet, cumque impedit iste eaque, tenetur vel. Deleniti corrupti natus, minus possimus ipsam libero. Nemo, illum quas iusto exercitationem aperiam animi sunt?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "It's sunny outside",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Explicabo amet saepe tempore, similique reiciendis architecto vel! Expedita ipsum ipsam debitis tempora aut rem totam, molestiae placeat? Labore, sequi.",
        content: `{"blocks":[{"key":"8kit6","text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi omnis. Culpa optio amet laboriosam voluptatem nisi dolor aliquam a eveniet error facilis rerum ipsum officiis fugit, quo omnis vero?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4ntr2","text":"Eum laborum, saepe molestiae, distinctio possimus quam, nobis itaque officiis quisquam tenetur delectus porro. Cumque, praesentium odio dolores dignissimos earum maiores exercitationem cupiditate debitis repellendus impedit optio itaque dolore molestias.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1psuj","text":"Maxime nam cupiditate delectus dolore temporibus, libero voluptate voluptatibus aut esse assumenda illum porro provident nobis quibusdam adipisci itaque, culpa modi incidunt minus similique. Deleniti, dolores magni. Mollitia, expedita praesentium!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aq3hl","text":"Exercitationem mollitia eum eveniet impedit alias? Beatae fuga fugit ipsa qui molestiae nam quasi error, nihil excepturi at veniam officiis quibusdam molestias earum iusto, rerum vel ex sunt sed mollitia?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cfhpi","text":"Quam pariatur sint est odio, autem quo qui eveniet, cumque impedit iste eaque, tenetur vel. Deleniti corrupti natus, minus possimus ipsam libero. Nemo, illum quas iusto exercitationem aperiam animi sunt?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "It's snowing outside",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Explicabo amet saepe tempore, similique reiciendis architecto vel! Expedita ipsum ipsam debitis tempora aut rem totam, molestiae placeat? Labore, sequi.",
        content: `{"blocks":[{"key":"8kit6","text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi omnis. Culpa optio amet laboriosam voluptatem nisi dolor aliquam a eveniet error facilis rerum ipsum officiis fugit, quo omnis vero?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4ntr2","text":"Eum laborum, saepe molestiae, distinctio possimus quam, nobis itaque officiis quisquam tenetur delectus porro. Cumque, praesentium odio dolores dignissimos earum maiores exercitationem cupiditate debitis repellendus impedit optio itaque dolore molestias.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1psuj","text":"Maxime nam cupiditate delectus dolore temporibus, libero voluptate voluptatibus aut esse assumenda illum porro provident nobis quibusdam adipisci itaque, culpa modi incidunt minus similique. Deleniti, dolores magni. Mollitia, expedita praesentium!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aq3hl","text":"Exercitationem mollitia eum eveniet impedit alias? Beatae fuga fugit ipsa qui molestiae nam quasi error, nihil excepturi at veniam officiis quibusdam molestias earum iusto, rerum vel ex sunt sed mollitia?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cfhpi","text":"Quam pariatur sint est odio, autem quo qui eveniet, cumque impedit iste eaque, tenetur vel. Deleniti corrupti natus, minus possimus ipsam libero. Nemo, illum quas iusto exercitationem aperiam animi sunt?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "It's hailing outside",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Explicabo amet saepe tempore, similique reiciendis architecto vel! Expedita ipsum ipsam debitis tempora aut rem totam, molestiae placeat? Labore, sequi.",
        content: `{"blocks":[{"key":"8kit6","text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi omnis. Culpa optio amet laboriosam voluptatem nisi dolor aliquam a eveniet error facilis rerum ipsum officiis fugit, quo omnis vero?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4ntr2","text":"Eum laborum, saepe molestiae, distinctio possimus quam, nobis itaque officiis quisquam tenetur delectus porro. Cumque, praesentium odio dolores dignissimos earum maiores exercitationem cupiditate debitis repellendus impedit optio itaque dolore molestias.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1psuj","text":"Maxime nam cupiditate delectus dolore temporibus, libero voluptate voluptatibus aut esse assumenda illum porro provident nobis quibusdam adipisci itaque, culpa modi incidunt minus similique. Deleniti, dolores magni. Mollitia, expedita praesentium!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aq3hl","text":"Exercitationem mollitia eum eveniet impedit alias? Beatae fuga fugit ipsa qui molestiae nam quasi error, nihil excepturi at veniam officiis quibusdam molestias earum iusto, rerum vel ex sunt sed mollitia?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cfhpi","text":"Quam pariatur sint est odio, autem quo qui eveniet, cumque impedit iste eaque, tenetur vel. Deleniti corrupti natus, minus possimus ipsam libero. Nemo, illum quas iusto exercitationem aperiam animi sunt?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
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
