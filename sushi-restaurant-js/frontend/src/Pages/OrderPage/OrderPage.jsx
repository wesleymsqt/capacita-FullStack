//Pagina de pedidos
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import api from "../../services/api";
import "./OrderPage.css";

function OrderPage() {
  const [order, setOrder] = useState({
    name: "",
    tableNumber: "",
    items: [],
  });

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentItem, setCurrentItem] = useState("");
  const [currentQuantity, setCurrentQuantity] = useState(1);

  // Carregar categorias ao montar o componente
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await api.getCategories();
        setCategories(data);
      } catch (error) {
        alert(error.message);
      }
    };
    loadCategories();
  }, []);

  // Carregar produtos quando selecionar categoria
  const handleCategoryClick = async (category) => {
    try {
      setProducts([]); // Novo: Limpa produtos anteriores
      const data = await api.getProductsByCategory(category);
      setProducts(data);
      setCurrentCategory(category);
      setCurrentItem("");
      setCurrentQuantity(1);
      setShowModal(true);
    } catch (error) {
      alert(error.message);
    }
  };

  // Adicionar item ao pedido
  const handleAddItem = () => {
    if (!currentItem || currentQuantity < 1) {
      alert("Selecione um item e quantidade válida!");
      return;
    }

    const selectedProduct = products.find((p) => p.id === Number(currentItem));

    setOrder((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          productId: selectedProduct.id,
          name: selectedProduct.name,
          category: currentCategory,
          quantity: currentQuantity,
          price: selectedProduct.price,
        },
      ],
    }));

    setShowModal(false);
  };

  // Enviar pedido
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!order.name || !order.tableNumber || order.items.length === 0) {
      alert("Preencha todos os campos e adicione itens!");
      return;
    }

    try {
      const orderData = {
        customerName: order.name,
        tableNumber: Number(order.tableNumber),
        items: order.items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      };

      const result = await api.createOrder(orderData);
      alert(
        `Pedido #${result.id} enviado! Total: R$ ${result.total.toFixed(2)}`
      );

      // Resetar estado
      setOrder({
        name: "",
        tableNumber: "",
        items: [],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  // Calcular total
  const calculateTotal = () => {
    return order.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const removeItem = (indexToRemove) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      items: prevOrder.items.filter((_, index) => index !== indexToRemove),
    }));
  };

  return (
    <div className="content">
      <div className="order-container">
        <h2 className="order-title">Faça seu pedido</h2>
        {/* Formulário para entrada dos dados do pedido */}
        <form onSubmit={handleSubmit}>
          {/* Campo para o nome do cliente */}
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={order.name}
              onChange={(e) => setOrder({ ...order, name: e.target.value })}
              required
            />
          </div>
          {/* Campo para o número da mesa */}
          <div className="form-group">
            <label htmlFor="tableNumber">Número da Mesa:</label>
            <input
              type="text"
              id="tableNumber"
              name="tableNumber"
              value={order.tableNumber}
              onChange={(e) =>
                setOrder({ ...order, tableNumber: e.target.value })
              }
              required
            />
          </div>
          <br />
          {/* Lista de botões que representam as categorias do menu */}

          <div className="menu-category-list">
            {categories.map((category) => (
              <button
                key={category.id} // Correção: Usar ID como chave
                type="button" // Importante para evitar submit
                className="category-button"
                onClick={() => handleCategoryClick(category.name)} // Correção: Passar nome
              >
                {category.name}
              </button>
            ))}
          </div>
          {/* Exibe o total do pedido calculado dinamicamente */}
          <div>
            <h3 className="order-total">Itens do Pedido:</h3>
            <ul>
              {order.items.map((item, index) => (
                <li key={`${item.productId}-${index}`}>
                  {" "}
                  {/* Correção aqui */}
                  {item.quantity}x {item.name} - R${" "}
                  {(item.price * item.quantity).toFixed(2)}
                  <button
                    type="button" // Adicionado para evitar submit
                    onClick={() => removeItem(index)}
                    className="remove-button"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <h3 className="total">Total: R$ {calculateTotal().toFixed(2)}</h3>
          </div>

          <button type="submit" className="submit-button">
            Enviar Pedido
          </button>
        </form>

        {/* Modal para seleção do item e quantidade */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          backdrop="static"
        >
          <Modal.Header closeButton className="custom-modal-header">
            <Modal.Title className="modal-title-custom">
              Selecione o item e a quantidade
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="custom-modal-body">
            <div className="form-group mb-4">
              <label htmlFor="itemSelect" className="form-label">
                Item:
              </label>
              <select
                id="itemSelect"
                className="form-select custom-select"
                value={currentItem}
                onChange={(e) => setCurrentItem(e.target.value)}
              >
                <option value="">Selecione um item</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name} - R$ {product.price.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="quantity" className="form-label">
                Quantidade:
              </label>
              <input
                type="number"
                min="1"
                className="form-control custom-input"
                value={currentQuantity}
                onChange={(e) => {
                  // Correção para evitar valores inválidos
                  const value = Math.max(parseInt(e.target.value) || 1, 1);
                  setCurrentQuantity(value);
                }}
              />
            </div>
          </Modal.Body>

          <Modal.Footer className="custom-modal-footer">
            {/* Botões convertidos para button nativo */}
            <button
              type="button" // Essencial para não submeter o form
              className="modal-btn"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button
              type="button" // Mesmo motivo acima
              className="modal-btn"
              onClick={handleAddItem}
            >
              Adicionar ao Pedido
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default OrderPage;
