import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';


class HeaderNavigation extends Component {
    render() {
        const navTemplate = {
          backgroundColor : "#90EE90"
        }

        return(
            <Navbar style={navTemplate}>
            <Navbar.Brand href="#home">Green Tick</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
          </Navbar>
        )
    }
}

export default HeaderNavigation;