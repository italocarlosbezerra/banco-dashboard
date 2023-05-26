const portfolioRepository = require("../repositories/portfolioRepositorie");

exports.getPortfolio = async (req, res) => {
   const portfolio = await portfolioRepository.getPortfolio();
   res.json(portfolio);
};

exports.getProjetoById = async (req, res) => {
   const id = parseInt(req.params.id);
   const projeto = await portfolioRepository.getProjetoById(id);
   res.json(projeto);
};

exports.createProjeto = async (req, res) => {
   try {
      const projeto = req.body;
      const newProjeto = await portfolioRepository.createProjeto(projeto);
      res.json(newProjeto);
   } catch (error) {
      console.log(error);
   }
};

exports.updateProjeto = async (req, res) => {
   const id = parseInt(req.params.id);
   const projeto = req.body;
   const updateProjeto = await portfolioRepository.updateProjeto(id, projeto);
   res.json(updateProjeto);
};

exports.deleteProjeto = async (req, res) => {
   const id = parseInt(req.params.id);
   await portfolioRepository.deleteProjeto(id);
   res.json({ message: `Projeto ${id} foi deletado!` });
};
