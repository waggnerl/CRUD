module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("contadors", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      contador_inicial: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      contador_final: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: true,
      },
      id_equipamento: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "equipamentos",
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("contadors"),
};
