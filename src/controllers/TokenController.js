import User from "../models/User";
import jwt from "jsonwebtoken";

class TokenController {
  async store(req, res) {
    const { nome = "", password = "" } = req.body;
    if (!nome || !password) {
      return res.status(401).json({
        errors: ["Credenciais inválidas"],
      });
    }
    const user = await User.findOne({ where: { nome } });
    if (!user) {
      return res.status(401).json({
        errors: ["Usuário não existe"],
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ["Senha inválida"],
      });
    }
    const { id } = user;
    const token = jwt.sign({ id, nome }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token, user: { nome: user.nome, id } });
  }
}

export default new TokenController();
