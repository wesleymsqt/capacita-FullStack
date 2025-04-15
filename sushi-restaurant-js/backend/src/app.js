const express = require("express");
const bodyParser = require("body-parser");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(bodyParser.json());

// Rotas
app.use(categoryRoutes);
app.use(productRoutes);
app.use(orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
