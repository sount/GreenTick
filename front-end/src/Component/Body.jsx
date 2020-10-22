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
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => {
                const historyData = res.data.data
                this.setState(historyData)
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