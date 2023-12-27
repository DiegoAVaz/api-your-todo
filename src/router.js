const express = require("express");
const { buscaUsuario } = require("./controllers/buscarUsuario");
const { criarUsuario } = require("./controllers/criarUsuario");
const { criarTarefa } = require("./controllers/criarTarefa");
const { buscarTarefa } = require("./controllers/buscarTarefa");
const { atualizarTarefa } = require("./controllers/atualizarTarefa");
const { deletarTarefa } = require("./controllers/deletarTarefa");
const { login } = require("./controllers/login");
const { buscarTarefas } = require("./controllers/buscarTarefas");
const {
  sendEmailRecuperaSenha,
} = require("./controllers/sendEmailRecuperaSenha");
const { redefinirSenha } = require("./controllers/redefinirSenha");
const verifyToken = require("./middlewares/verifyToken");

const router = express.Router();

router.get("/buscarUsuario", verifyToken, buscaUsuario);
router.get("/buscarTarefa", verifyToken, buscarTarefa);
router.get("/buscarTarefas", verifyToken, buscarTarefas);

router.post("/criarUsuario", verifyToken, criarUsuario);
router.post("/criarTarefa", verifyToken, criarTarefa);
router.post("/login", verifyToken, login);
router.post("/sendEmailRecuperaSenha", verifyToken, sendEmailRecuperaSenha);
router.post("/redefinirSenha", verifyToken, redefinirSenha);

router.put("/atualizarTarefa", verifyToken, atualizarTarefa);

router.delete("/deletarTarefa", verifyToken, deletarTarefa);

module.exports = {
  router,
};
