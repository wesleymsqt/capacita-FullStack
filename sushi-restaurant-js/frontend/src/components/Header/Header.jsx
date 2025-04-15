import { Navbar, Nav, Container } from 'react-bootstrap';
// Importa o componente Link do react-router-dom para navegação interna sem recarregar a página
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" bg="brown" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h3 className='navbar-title'>Miyabi Sushi</h3>
        </Navbar.Brand>
        
         {/* Botão de toggle para exibir/ocultar o menu em dispositivos móveis */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Container para os itens de navegação que serão colapsados em telas menores */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Início
            </Nav.Link>

            <Nav.Link as={Link} to="/sobre-nos">
              Sobre Nós
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>

            <Nav.Link as={Link} to="/pedidos">
              Pedidos
            </Nav.Link>

            <Nav.Link as={Link} to="/historias">
              Histórias
            </Nav.Link>

            <Nav.Link as={Link} to="/contato">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;