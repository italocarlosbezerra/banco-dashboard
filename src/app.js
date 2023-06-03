require("./config/dotenv");
require("express-async-errors");

const express = require("express");
const cors = require("cors");

const { initDatabase } = require("./config/db");

const experienciasRoute = require("./routes/experienciasRoute");
const portfolioRoute = require("./routes/portfolioRoute");
const informacoesRoute = require("./routes/informacoesRoute");
const authRoute = require("./routes/authRoute");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/api/experiencias", experienciasRoute);
app.use("/api/portfolio", portfolioRoute);
app.use("/api/informacoes", informacoesRoute);
app.use("/api/auth", authRoute);

initDatabase();

app.use((err, req, res, next) => {
   console.log(err.stack);
   res.status(500).send({ Erro: err.message });
});

app.listen(port, () => {
   console.log(`🚀 Servidor rodando na porta ${port}`);
   console.log(`💻 HOST: ${process.env.DB_HOST}`);
});
