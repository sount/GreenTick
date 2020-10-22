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
        return(
            <Container>
                <Row>
                    <Col md={4}><History historyData={this.state.historyData}/></Col>
                    <Col md={{ span : 4, offset : 4}}><LoginSystem/></Col>
                </Row>
            </Container>
        )
    }
}

export default Body;