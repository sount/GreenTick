import React, { Component } from 'react';
import History from './Data_Display/History';
import LoginSystem from './Login/LoginSystem';

class Body extends Component {
    render() {
        return(
            <div>
                <LoginSystem/>
                <History/>
            </div>
        )
    }
}

export default Body;