import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../assets/images/logo-white.png";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import './header.css'

const Header = () => {

  const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <Nav.Link as={Link} to="/">
                <img src={logo} alt="logo" className='w-25 h-25 ms-5'/>
                </Nav.Link>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navmenu">
                <Nav.Link as={Link} to="/">
                Home
                </Nav.Link>
                <Nav.Link as={Link} to="/tour">
                Tours
                </Nav.Link>
                {user ? (
                  <>
                   <p className='mt-2 ms-2 fw-medium text-secondary'>{user.name}</p>
                  <Nav.Link onClick={logout} id='logout'>Logout</Nav.Link>
                  </>
                ) : (
                  <>
                   <Nav.Link as={Link} to="/signin">
                Signin
                </Nav.Link>
                <Nav.Link as={Link} to="/register" id='register'>
                Register
                </Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header