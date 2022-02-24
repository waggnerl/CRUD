import { Router } from "express";
import contadorController from "../controllers/ContadorController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", loginRequired, contadorController.store);
router.get("/", loginRequired, contadorController.index);
router.get("/:id", loginRequired, contadorController.show); // Lista usuário
router.delete("/:id", loginRequired, contadorController.delete);

export default router;
