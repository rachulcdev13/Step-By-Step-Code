import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <div>
                <Navbar className="header" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Samat</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default Header;
