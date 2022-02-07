import Sequelize, { Model } from "sequelize";

export default class Equipamento extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        patrimonio: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          unique: {
            msg: "Patrimônio já cadastrado",
          },
        },
        tipo: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        status: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Setor, { foreignKey: "id_setor" });
    this.hasMany(models.Contador, { foreignKey: "id_equipamento" });
  }
}
