import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './../img/check.png'


class HeaderNavigation extends Component {
    render() {
        const navTemplate = {
          backgroundColor : "#90EE90"
        }

        return(
            <Navbar style={navTemplate}>
              <Navbar.Brand href="#home">
                <img 
                  src={logo}
                  width= "30"
                  height= "30"
                  classname= "d-inline-block align-top"
                  alt="Green Tick logo"
                />
                {''}
                Green Tick
                </Navbar.Brand>
          </Navbar>
        )
    }
}

export default HeaderNavigation;