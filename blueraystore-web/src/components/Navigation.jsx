import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Nav className="me-auto">
                    <Link to="/">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Link>
                    <Link to="/add">
                        <Nav.Link href="/add">Add a movie</Nav.Link>
                    </Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Navigation