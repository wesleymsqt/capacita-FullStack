const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async createCategory(req, res) {
    try {
      const { name } = req.body;
      const category = await prisma.category.create({ data: { name } });
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async listCategories(req, res) {
    try {
      const categories = await prisma.category.findMany();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
