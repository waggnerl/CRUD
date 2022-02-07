import { Router } from "express";
import setorController from "../controllers/SetorController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", setorController.store);
router.get("/", setorController.index);


export default router;
