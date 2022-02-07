import dotenv from "dotenv";
dotenv.config();
import "./src/database";
import express from "express";

import cors from "cors";
import helmet from "helmet";
import delay from "express-delay";

import userRoutes from "./src/routes/userRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import setorRoutes from "./src/routes/setorRoutes";
import equipamentoRoutes from "./src/routes/equipamentoRoutes";
import contadorRoutes from "./src/routes/contadorRoutes";

const whiteList = ["http://localhost:3001"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(delay(2000));
    this.app.use(cors());
  }
  routes() {
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/setor/", setorRoutes);
    this.app.use("/equipamento/", equipamentoRoutes);
    this.app.use("/contador/", contadorRoutes);
  }
}

export default new App().app;
