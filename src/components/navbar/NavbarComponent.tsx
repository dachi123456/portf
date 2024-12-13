import { Container, Nav, Navbar } from "react-bootstrap";
import './navbar.css';
import useSmoothScroll from "../../hooks/useSmoothScroll";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const smoothScrollToSection = useSmoothScroll();
  const navigate = useNavigate()
  const onNavLinks = (section:string) => {
    navigate('/')
    smoothScrollToSection(section)
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-lg-end">
      <Container fluid className="p-0">
        <Navbar.Brand className="fw-bold ms-3" onClick={() => smoothScrollToSection('main')} style={{cursor:'pointer'}}>Dachi G.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="toggle-btn"/>
        <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end">
          <div className="d-md-flex direction-column">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <div className="d-flex gap-3 components-div">
                <p onClick={() => onNavLinks('main')}>Home</p>
                <p onClick={() => onNavLinks('about')}>About Me</p>
                <p onClick={() => onNavLinks('projects')}>Projects</p>
                <p onClick={() => onNavLinks('contact')}>Contact me</p>
              </div>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
