import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

//Não deveria existir
router.get("/", loginRequired, userController.index);
//router.get("/:id", userController.show);

router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
Index -- Lista todos os usuários -- get
store/create -- Cria novos usuários -- post
delete --apaga um usuário -- delete
show -- mostra um usuário --get
update --atualiza um usuário --PATCH(TODOS) OR PUT(ESPECIFICO)

*/
