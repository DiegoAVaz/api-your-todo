require("dotenv").config();

const verifyToken = async (req, res, next) => {
  const authToken = req.headers.authorization;

  console.log(authToken);

  if (!authToken) {
    return res
      .status(403)
      .send({ message: "Um token de autorização é obrigatório" });
  }
  try {
    if (authToken == process.env.AUTH_TOKEN) {
      return next();
    } else {
      return res.status(401).send({ message: "Token inválido" });
    }
  } catch (err) {
    return res.status(401).send({ message: "Token inválido" });
  }
};

module.exports = verifyToken;
