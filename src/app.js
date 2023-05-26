require("dotenv").config();
const express = require("express");
const { initDatabase } = require("./config/db");
const experienciasRoute = require("./routes/experienciasRoute");
const portfolioRoute = require("./routes/portfolioRoute");
const informacoesRoute = require("./routes/informacoesRoute");

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/experiencias", experienciasRoute);
app.use("/api/portfolio", portfolioRoute);
app.use("/api/informacoes", informacoesRoute);

initDatabase();

app.listen(port, () => {
   console.log(`🚀 Servidor rodando na porta ${port}`);
});
