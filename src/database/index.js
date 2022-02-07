import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import Contador from "../models/Contador";
import Setor from "../models/Setor";
import Equipamento from "../models/Equipamento";
import User from "../models/User";

const models = [Contador, User, Setor, Equipamento];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
