import { Router } from "express";
import equipamentoController from "../controllers/EquipamentoController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", loginRequired, equipamentoController.store);
router.get("/", loginRequired, equipamentoController.index);
router.put("/:id", loginRequired, equipamentoController.update);
router.get("/:id", loginRequired, equipamentoController.show);

export default router;
