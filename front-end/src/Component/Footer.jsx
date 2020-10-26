import React, { Component } from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

class AppFooter extends Component {
    
    render() {
        const footerStyle = {
            backgroundColor : "#90EE90",
            height : "40px"
        }

        const textSize = {
            fontSize : "10px",

        }


        return(
            <div className="fixed-bottom">  
                <Navbar style={footerStyle}>
                    <Container>
                        <NavbarBrand>&copy; Green Tick 2020 
                            <a href="/#" style={textSize}> ft. James, Ka Chun, Kevin, Talant, Sabina, Tung</a>
                        </NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppFooter;