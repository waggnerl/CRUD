import Equipamento from "../models/Equipamento";
import Contador from "../models/Contador";

class EquipamentoController {
  async index(req, res) {
    const equipamento = await Equipamento.findAll({
      attributes: ["id", "nome", "patrimonio", "tipo", "status"],
      order: [["id", "DESC"]],
    });
    res.json(equipamento);
  }
  async store(req, res) {
    try {
      const equipamento = await Equipamento.create(req.body);
      return res.json(equipamento);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }

      const equipamento = await Equipamento.findByPk(id, {
        attributes: ["id", "nome", "patrimonio", "tipo", "status", "id_setor"],
        order: [["id", "DESC"]],
      });

      if (!equipamento) {
        return res.status(400).json({
          errors: ["Equipamento não existe"],
        });
      }

      return res.json(equipamento);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }

      const equipamento = await Equipamento.findByPk(id);

      if (!equipamento) {
        return res.status(400).json({
          errors: ["Equipamento não existe"],
        });
      }

      const equipamentoAtualizado = await equipamento.update(req.body);
      return res.json(equipamentoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new EquipamentoController();
