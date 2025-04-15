const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async createProduct(req, res) {
    try {
      const productsData = req.body;
      if (!Array.isArray(productsData)) {
        return res.status(400).json({ error: "Esperado um array de produtos" });
      }
      const createdProducts = await prisma.$transaction(
        productsData.map((product) => prisma.product.create({ data: product }))
      );
      res.status(201).json(createdProducts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async listProductsByCategory(req, res) {
    try {
      const { category } = req.query;
      const products = await prisma.product.findMany({
        where: { category: { name: category } },
      });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
