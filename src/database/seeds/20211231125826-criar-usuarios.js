const bcryptjs = require("bcryptjs");
module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Luiz",
          email: "luiz@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz2",
          email: "luiz2@gmail.com",
          password_hash: await bcryptjs.hash("4563456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz3",
          email: "luiz3@gmail.com",
          password_hash: await bcryptjs.hash("213123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),
};

//down () => {
//
//}
