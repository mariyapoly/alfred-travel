import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'


const Header = () => {

    const { user, logOut } = useAuth();

    return (
        // navbar start
        <Navbar expand="lg" sticky="top">
            <Container>
                <NavLink className="alfred-logo" to="/">alfred travel</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink activeClassName="selected" to="/home">Home</NavLink>
                        <NavLink activeClassName="selected" to="/aboutUs">about us</NavLink>
                        <NavLink activeClassName="selected" to="/ourService">our service</NavLink>
                        {
                            !user.email ? <NavLink activeClassName="selected" to="/login">login</NavLink> : <>
                                <NavDropdown className="dropdown" title="dashboard" id="basic-nav-dropdown">
                                    <NavLink activeClassName="selected" to="/myOrder">my booking</NavLink>
                                    <NavLink activeClassName="selected" to="/orders">Manage All booking</NavLink>
                                    <NavLink activeClassName="selected" to="/addService">Add a service</NavLink>
                                </NavDropdown>
                                <button className="logout-btn" onClick={logOut} to="/login">logout</button>
                                <span className="user-name">{user.displayName}</span>
                            </>

                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // navbar end
    );
};

export default Header;
