import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./route.css"
const Header = () => {
    return (
        <>
            <div>
                <Navbar className="header" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand to="/">SamatApp</Navbar.Brand>
                        <Nav className="me-1" style={{ fontWeight: "bold", textTransform: "Uppercase" }}>
                            <NavLink active className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/RouterComponent/About">About</NavLink>
                            <NavLink className="nav-link" to="/RouterComponent/Contact">Contact</NavLink>
                            <NavLink className="nav-link" to="/CodeStepBYStep ">Code-Step-By-Step</NavLink>
                            <NavDropdown title="Example" id="basic-nav-dropdown">
                                <NavLink className="navlink" to="/CodeStepBYStep">Action</NavLink>
                                <NavLink className="navlink" to="/">Another action</NavLink>
                                <NavLink className="navlink" to="/">Something</NavLink>
                                <NavDropdown.Divider />
                                <NavLink className="navlink" to="/">Separated link</NavLink>
                            </NavDropdown>

                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default Header;
