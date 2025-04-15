//Pagina de pedidos
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './OrderPage.css';

function OrderPage() {
  // Estado inicial do pedido com nome, número da mesa e lista de itens
  const [order, setOrder] = useState({
    name: '',
    tableNumber: '',
    items: [],
  });

  // Estado para controlar a visibilidade do modal
  const [showModal, setShowModal] = useState(false);
  // Estado para armazenar a categoria atual selecionada
  const [currentCategory, setCurrentCategory] = useState('');
  // Estado para armazenar o item atual selecionado
  const [currentItem, setCurrentItem] = useState('');
  // Estado para armazenar a quantidade atual selecionada (inicia com 1)
  const [currentQuantity, setCurrentQuantity] = useState(1);

  // Objeto que contém os itens do menu divididos
  const menuItems = {
    cafes: {
      'Águas de Março': 5.0,
      Sampa: 6.5,
      'Garota de Ipanema': 7.0,
      'Chega de Saudade': 6.0,
      Carinhoso: 8.0,
      'Cappuccino Malandragem': 9.0,
    },
    sobremesas: {
      'Doce de Maracujá': 8.0,
      'Romeu e Julieta': 9.0,
      'Chão de Giz': 10.0,
      'Bolinho de Chuva': 6.5,
      'Coração Bobo': 7.5,
      'Pettit Gateau Ilegais': 12.0,
    },
    especiais: {
      'Tarde em Itapoã': 12.0,
      'O Canto da Cidade': 10.0,
      'Fora da Ordem': 11.5,
      'O Leãozinho': 9.5,
    },
    bebidasGeladas: {
      'Sorvete de Baunilha': 7.0,
      'Milk Shake de Chocolate': 10.0,
      'Milk Shake de Morango': 10.0,
      'Vitamina de Banana': 8.0,
      'Vitamina de Morango': 8.5,
    },
    chas: {
      'Chá de Hortelã': 4.5,
      'Chá Verde': 5.0,
      'Chá de Camomila': 4.5,
      'Chá de Frutas Vermelhas': 6.0,
      'Chá de Gengibre e Limão': 5.5,
    },
  };

  // Função para calcular o total do pedido
  const calculateTotal = items =>
    items.reduce(
      (total, item) =>
        total + (menuItems[item.category]?.[item.name] || 0) * item.quantity,
      0
    );
  // Define a categoria atual, reinicia a seleção do item e quantidade e exibe o modal
  const handleCategoryClick = category => {
    setCurrentCategory(category);
    setCurrentItem('');
    setCurrentQuantity(1);
    setShowModal(true);
  };

  const handleAddItem = () => {
    if (!currentItem || currentQuantity <= 0) {
      alert('Por favor, selecione um item e uma quantidade válida.');
      return;
    }
    // Cria uma cópia dos itens atuais do pedido
    const updatedItems = [...order.items];
    // Verifica se o item já existe no pedido, baseado na categoria e nome
    const existingItemIndex = updatedItems.findIndex(
      item => item.category === currentCategory && item.name === currentItem
    );
    // Se o item já existir, incrementa a quantidade
    if (existingItemIndex !== -1) {
      updatedItems[existingItemIndex].quantity += currentQuantity;
    } else {
      updatedItems.push({
        category: currentCategory,
        name: currentItem,
        quantity: currentQuantity,
      });
    }
    // Atualiza o estado do pedido com os novos itens
    setOrder({ ...order, items: updatedItems });
    // Fecha o modal após adicionar o item
    setShowModal(false);
  };
  // Envio do formulário de pedido
  const handleSubmit = e => {
    e.preventDefault();
    alert(
      `Pedido enviado com sucesso! Valor total: R$ ${calculateTotal(
        order.items
      ).toFixed(2)}`
    );
    // Reseta o estado do pedido para os valores iniciais
    setOrder({ name: '', tableNumber: '', items: [] });
  };

  return (
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
            onChange={e => setOrder({ ...order, name: e.target.value })}
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
            onChange={e => setOrder({ ...order, tableNumber: e.target.value })}
            required
          />
        </div><br />
        {/* Lista de botões que representam as categorias do menu */}
        <div className="menu-category-list">
          {Object.keys(menuItems).map(category => (
            <Button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="category-button"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
        {/* Exibe o total do pedido calculado dinamicamente */}
        <h3 className="order-total">
          Total: R$ {calculateTotal(order.items).toFixed(2)}
        </h3>

        <button type="submit" className="submit-button">
          Enviar Pedido
        </button>
      </form>

      {/* Modal para seleção do item e quantidade */}
      <div>
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
                onChange={e => setCurrentItem(e.target.value)}
              >
                <option value="">Selecione um item</option>
                {Object.keys(menuItems[currentCategory] || {}).map(item => (
                  <option key={item} value={item}>
                    {item} - R$ {menuItems[currentCategory][item].toFixed(2)}
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
                className="form-control custom-input"
                value={currentQuantity}
                min="1"
                onChange={e => setCurrentQuantity(parseInt(e.target.value))}
              />
            </div>
          </Modal.Body>

          <Modal.Footer className="custom-modal-footer">
            <button
              className="btn btn-secondary modal-btn"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button
              className="btn btn-primary modal-btn"
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