const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async createOrder(req, res) {
    try {
      const { customerName, tableNumber, items } = req.body;

      // Buscar produtos e calcular total
      const productIds = items.map((item) => item.productId);
      const products = await prisma.product.findMany({
        where: { id: { in: productIds } },
        include: { category: true },
      });

      const total = items.reduce((sum, item) => {
        const product = products.find((p) => p.id === item.productId);
        return sum + product.price * item.quantity;
      }, 0);

      // Criar pedido
      const order = await prisma.order.create({
        data: {
          customerName,
          tableNumber,
          total,
          items: {
            create: items.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              return {
                productId: item.productId,
                productName: product.name,
                category: product.category.name,
                quantity: item.quantity,
                price: product.price,
              };
            }),
          },
        },
        include: { items: true },
      });

      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async listOrders(req, res) {
    try {
      const orders = await prisma.order.findMany({
        include: { items: true },
      });
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
