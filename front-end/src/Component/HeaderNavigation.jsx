import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';


class HeaderNavigation extends Component {
    render() {
        return(
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Green Tick</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Placeholder 1</Nav.Link>
              <Nav.Link href="#features">Placeholder 2</Nav.Link>
            </Nav>
          </Navbar>
        )
    }
}

export default HeaderNavigation;