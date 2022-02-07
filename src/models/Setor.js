import Sequelize, { Model } from "sequelize";

export default class Setor extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Patrimônio já cadastrado",
          },
        },
      },
      {
        sequelize,
        tableName: "setors",
      }
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.Equipamento, { foreignKey: "id_setor" });
  }
}
