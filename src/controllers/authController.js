const usuariosRepository = require("../repositories/usuariosRepositorie");

exports.login = async (req, res) => {
   const { email, password } = req.body;

   const usuario = await usuariosRepository.getUsuarioByEmail(email);

   if (!usuario || usuario.password !== password) {
      return res.status(401).json({ message: "Usuário ou senha inválidos!" });
   }

   return res.status(200).json({ message: "Login efetuado com sucesso!" });
};
