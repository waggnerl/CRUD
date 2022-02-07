import Sequelize, { Model } from "sequelize";

export default class Contador extends Model {
  static init(sequelize) {
    super.init(
      {
        contador_inicial: {
          type: Sequelize.INTEGER,
          defaultValue: "",
        },
        contador_final: {
          type: Sequelize.INTEGER,
          defaultValue: "",
        },
        data: {
          type: Sequelize.DATE,
          defaultValue: "",
          unique: {
            msg: "Data já cadastrada",
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Equipamento, { foreignKey: "id_equipamento" });
  }
}
