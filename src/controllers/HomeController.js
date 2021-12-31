import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Otavio',
      email: 'wagner@gmail.com',
      idade: 12,
      peso: 300,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
