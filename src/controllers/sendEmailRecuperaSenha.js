const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { buscarUsuarioPeloEmail } = require("../models/buscaUsuarioPeloEmail");
const dotenv = require("dotenv").config();

const linkRedefinicao = "http://localhost:3000/redefinirSenha/";

const sendEmailRecuperaSenha = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "diegoalves32@gmail.com",
      pass: process.env.SENHA_EMAIL,
    },
  });
  try {
    const { email } = req.body;
    const secretKey = process.env.SECRET_KEY;

    const user = await buscarUsuarioPeloEmail(email);
    if (!user) {
      return res.status(404).send("Usuário não encontrado");
    }

    console.log(user.idusuario);

    const token = jwt.sign({ userId: user.idusuario }, secretKey, {
      expiresIn: "1h",
    });

    const resetLink = `${linkRedefinicao}${token}`;
    const mailOptions = {
      from: "diegoalves32@gmail.com",
      to: email,
      subject: "Recuperação de Senha",
      text: `Clique no link para redefinir sua senha: ${resetLink}`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Erro ao enviar e-mail de recuperação de senha:", error);
        return res
          .status(500)
          .send("Erro ao enviar e-mail de recuperação de senha");
      }
      console.log("E-mail de recuperação de senha enviado com sucesso.");
      res.send("E-mail enviado com sucesso. Verifique sua caixa de entrada.");
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  sendEmailRecuperaSenha,
};
