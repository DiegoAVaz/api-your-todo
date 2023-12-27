const bcrypt = require("bcrypt");
const { loginModel } = require("../models/loginModel");

const login = async (req, res) => {
  try {
    const { username, senha } = req.body;

    const usuario = await loginModel(username);

    console.log(usuario);

    if (!usuario) {
      return res.status(401).json({ msg: "Credenciais inválidas" });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ msg: "Credenciais inválidas" });
    }

    const userInfos = {
      idusuario: usuario.idusuario,
      nome: usuario.nome,
      isLoggedIn: true,
    };

    return res.status(200).json({ msg: "Login bem-sucedido", userInfos });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Erro ao realizar login" });
  }
};

module.exports = {
  login,
};
