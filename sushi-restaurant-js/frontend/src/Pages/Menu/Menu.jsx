import { useState, useEffect } from "react";
import { Tab, Tabs, Spinner } from "react-bootstrap";
import api from "../../services/api";
import "./Menu.css";
import categoryImage1 from "../../assets/pratos.jpg";
import categoryImage2 from "../../assets/sobremesas.jpg";
import categoryImage3 from "../../assets/especiais.jpg";
import categoryImage4 from "../../assets/bebidas.jpg";
import categoryImage5 from "../../assets/chas.jpg";

const Menu = () => {
  const [currentImage, setCurrentImage] = useState(categoryImage1);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  // Carregar categorias ao montar o componente
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await api.getCategories();
        setCategories(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0 && initialLoad) {
      const firstCategoryId = categories[0].id;
      setCurrentCategory(firstCategoryId);
      handleCategorySelect(firstCategoryId);
      setInitialLoad(false);
    }
  }, [categories]);

  // Carregar produtos quando selecionar categoria
  const handleCategorySelect = async (categoryId) => {
    try {
      setLoading(true);
      setError(null);
      if (!categories || categories.length === 0) {
        throw new Error("Categorias ainda não foram carregadas.");
      }
      const id = Number(categoryId);
      const selectedCategory = categories.find((cat) => cat.id === id);

      if (!selectedCategory) {
        throw new Error(`Categoria com ID ${id} não encontrada.`);
      }
      const data = await api.getProductsByCategory(selectedCategory.name);
      setProducts(data);
      setCurrentCategory(id);
      updateCategoryImage(id);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Mapeamento de imagens para categorias
  const updateCategoryImage = (categoryId) => {
    const imageMap = {
      1: categoryImage1,
      2: categoryImage2,
      3: categoryImage3,
      4: categoryImage4,
      5: categoryImage5,
    };
    setCurrentImage(imageMap[categoryId] || categoryImage1);
  };

  // Função para adicionar ícones conforme a categoria
  const getCategoryIcon = (categoryName) => {
    const icons = {
      Pratos: "🍣",
      Bebidas: "🥤",
      Sobremesas: "🍰",
      Chás: "🍵",
    };
    return icons[categoryName] || "";
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="content">
      <div className="header">
        <h2>Miyabi Sushi</h2>
      </div>
      <div className="main-menu">
        <div className="menu-img">
          <img src={currentImage} alt="Categoria" />
        </div>
        <div className="menu-tabs">
          <Tabs
            activeKey={currentCategory}
            id="menu-tabs"
            onSelect={(k) => handleCategorySelect(k)}
            className="mb-3"
          >
            {categories.map((category) => (
              <Tab
                key={category.id}
                eventKey={category.id}
                title={`${category.name} ${getCategoryIcon(category.name)}`}
              >
                <div className="tab-content-wrapper">
                  {error ? (
                    <div className="alert alert-danger">{error}</div>
                  ) : products.length === 0 ? (
                    <p className="no-products">
                      Nenhum produto disponível nesta categoria.
                    </p>
                  ) : (
                    <ul className="menu-list">
                      {products
                        .filter(
                          (product) =>
                            Number(product.categoryId) === Number(category.id)
                        )
                        .map((product) => (
                          <li key={product.id} className="menu-item">
                            <div className="item-details">
                              <h4>{product.name}</h4>
                              <p className="description">
                                {product.description}
                              </p>
                              <span className="price">
                                R$ {product.price.toFixed(2).replace(".", ",")}
                              </span>
                            </div>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Menu;
