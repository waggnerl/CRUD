import { Router } from "express";
import setorController from "../controllers/SetorController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", loginRequired, setorController.store);
router.get("/", loginRequired, setorController.index);

export default router;
