import React from 'react';
// Componentes necessários do react-router-dom para gerenciamento de rotas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Paginas
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import Hero from './Pages/Hero/Hero';
import OrderPage from './Pages/OrderPage/OrderPage';
import Contact from './Pages/Contact/Contact';
import Stories from './Pages/Stories/Stories';

function App() {
  return (
    <>
      <div className="router-container">
        {/* Aplicação para habilitar a navegação */}
        <Router>
          {/* Componente Header é renderizado no topo da página */}
          <Header />
          {/* Container para as rotas da aplicação */}
          <div className="routes">
            <Routes>
              <Route path="/" index element={<Hero />} />
              <Route path="/sobre-nos" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/pedidos" element={<OrderPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/historias" element={<Stories />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;