import Contador from "../models/Contador";

class ContadorController {
  async index(req, res) {
    const contador = await Contador.findAll({
      attributes: [
        "id",
        "contador_inicial",
        "contador_final",
        "data",
        "id_equipamento",
      ],
      order: [["id", "DESC"]],
    });

    res.json(contador);
  }
  async store(req, res) {
    try {
      const contador = await Contador.create(req.body);
      return res.json(contador);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  // Show
  async show(req, res) {
    try {
      const contador = await User.findByPk(req.params.id);

      const { id, contador_inicial, contador_final, id_equipamento } = contador;
      return res.json({ id, contador_inicial, contador_final, id_equipamento });
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new ContadorController();
