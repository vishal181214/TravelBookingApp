import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const auth = localStorage.getItem('user');
    const result = JSON.parse(auth);
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.clear();
        navigate('/LogIn');
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><h2>MyTraveller</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href="/">Buses</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            { result ? <><Nav.Link onClick={logout} href="/LogIn">LogOut</Nav.Link> 
                                         <Nav.Link href="#">{result.data.name}</Nav.Link>
                                        </>:
                                         <Nav.Link href="/LogIn">Log In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
