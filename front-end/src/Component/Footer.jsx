import React, { Component } from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

class AppFooter extends Component {
    render() {
        const footerStyle = {
            backgroundColor : "#00BFFF"
        }

        return(
            <div className="fixed-bottom">  
                <Navbar style={footerStyle}>
                    <Container>
                        <NavbarBrand>&copy; Green Tick 2020</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppFooter;