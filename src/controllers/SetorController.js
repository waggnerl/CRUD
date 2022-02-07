import Setor from "../models/Setor";

class SetorController {
  async store(req, res) {
    try {
      const setor = await Setor.create(req.body);
      return res.json(setor);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async index(req, res) {
    const setor = await Setor.findAll({
      attributes: ["id", "nome"],
      order: [
        ["id", "DESC"],
      ]
    });
    res.json(setor);
  }
}

export default new SetorController();
