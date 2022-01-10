import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    res.json(novoAluno);
  }
}

export default new HomeController();
