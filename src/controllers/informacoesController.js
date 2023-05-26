const informacoesRepository = require("../repositories/informacoesRepositorie");

exports.getInformacoes = async (req, res) => {
   const informacoes = await informacoesRepository.getInformacoes();
   res.json(informacoes);
};

exports.createInformacoes = async (req, res) => {
   const informacoes = req.body;
   const newInformacoes = await informacoesRepository.createInformacoes(informacoes);
   res.json(newInformacoes);
};

exports.deleteInformacoes = async (req, res) => {
   await informacoesRepository.deleteInformacoes();
   res.json({ message: `Informações removidas com sucesso!` });
};
