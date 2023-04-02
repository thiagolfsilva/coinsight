import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Coinsight
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/telegram">
            Telegram Bot
          </Nav.Link>
          <NavDropdown title="Kucoin Rates" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/kucoin/currentrates">
              Current Rates
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/kucoin/historicalrates">
              Historical Rates
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Tools" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/tools/rateconverter">
              Rate Converter
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/tools/leverageratio">
              Leverage Ratio
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav.Link href="https://apex-6.gitbook.io/coinsight" target="_blank">
          Learn
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default CustomNavbar;