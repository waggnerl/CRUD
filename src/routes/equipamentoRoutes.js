import { Router } from "express";
import equipamentoController from "../controllers/EquipamentoController";

const router = new Router();

router.post("/", equipamentoController.store);
router.get("/", equipamentoController.index);
router.get("/:id", equipamentoController.show);

export default router;
