import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navegacao() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Nome do usuario</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Resumo</Nav.Link>
            <Nav.Link href="#link">Resumo do mes</Nav.Link>        
            <NavDropdown title="Funcionalidades" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Adicionar Receitas mensais</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Adicionar despesa mensal
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacao;