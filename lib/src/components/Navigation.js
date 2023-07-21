import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
function Navigation() {
  const handleLogOut = () => {
    localStorage.removeItem('auth');
    window.localStorage.removeItem('isLoggedIn');
    toast.success('Logout Successfully');
  };
  return (
    <Navbar bg="grey" expand="md">
      <Container>
        <Navbar.Brand href="/">Available Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/librarian">Librarian Dashboard</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
