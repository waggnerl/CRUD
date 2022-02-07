module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("equipamentos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      patrimonio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_setor: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "setors",
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

  down: (queryInterface) => queryInterface.dropTable("equipamentos"),
};
