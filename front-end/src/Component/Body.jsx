import React, { Component } from 'react';
import History from './Data_Display/HistoryTable';
import LoginSystem from './Login/LoginSystem';
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap';

class Body extends Component {

    state = {
        historyData : []
    }

    constructor (props) {
        super(props)
    }

    componentDidMount () {
        axios.post('http://localhost:8000/historicaldata', {"token":"greentickteamforthewin","limit":10})
            .then(res => {
                const historyData = res.data
                console.log(historyData)
                this.setState({historyData : historyData})
            })
            .catch(err => console.log(`Error in Body: ${err}`))
        
    }

    render() {
        const containerTemplate = {
            position: 'absolute', 
            left: '50%', 
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width : "30%",
            padding : "10px",
            padding : "10px"
        }

        return(
            <Container style={containerTemplate}>
                    {/*<Col md={4}><History historyData={this.state.historyData}/></Col>*/}
                <LoginSystem/>
            </Container>
        )
    }
}

export default Body;