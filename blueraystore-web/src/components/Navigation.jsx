import { Navbar, Nav, Container, Button, ButtonGroup } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

function Navigation(){
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="xl">
                <Container>
                    <Nav>
                        <ButtonGroup>
                            <LinkContainer to="/">
                                <Button className="ml-3">Home</Button>
                            </LinkContainer>
                            <LinkContainer to="/add">
                                <Button className="ml-3">Add a movie</Button>  
                            </LinkContainer>
                        </ButtonGroup>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation