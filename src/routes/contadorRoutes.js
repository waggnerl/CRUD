import { Router } from "express";
import contadorController from "../controllers/ContadorController";

const router = new Router();

router.post("/", contadorController.store);
router.get("/", contadorController.index);
router.get("/:id", contadorController.show); // Lista usuário

export default router;
