import jwt from "jsonwebtoken";
import filosofoController from "../controllers/filosofoController.js";

// Função de Autenticação para verificar se o usuário está enviando o token e se ele é válido

const Authorization = (req, res, next) => {
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
    // Dividindo a string do token (para eliminar a palavra Bearer)
    const bearer = authToken.split(" ");
    const token = bearer[1];
    //Validando o token
    jwt.verify(token, userController.JWTsecret, (error, data) => {
      if (error) {
        res.status(401).json({ error: "Token inválido." });
        //TOKEN Inválido
      } else {
        req.token = token;
        req.loggedUser = {
          id: data.id,
          ideias: data.ideias,
        };
        next();
      }
    });
  } else {
    res.status(401).json({ error: "Acesso não autorizado." });
  }
};

export default { Authorization };

// essa parte aq tem q criar td dos user, tipo os admin do crud