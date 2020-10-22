import React, { Component } from 'react';
import LoginSystem from './Login/LoginSystem';
import axios from 'axios'
import { Container } from 'react-bootstrap';
import HistoryTable from './Data_Display/HistoryTable'

class Body extends Component {
    state = {
        historyData : []
    }


    async componentDidMount () {
        const request = {"token":"greentickteamforthewin","limit":10}
        const response = await axios.post('http://localhost:8080/historicaldata', request)

        const jsonRsponse = JSON.parse(response.data)
        let tempArr = []
        for (let i in jsonRsponse)
            tempArr.push(jsonRsponse[i])

        this.setState({historyData : tempArr})
    }

    render() {
        const containerTemplate = {
            position: 'absolute', 
            left: '50%', 
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width : "30%",
            padding : "10px"
        }

        return(
            <Container style={containerTemplate}>              
                <LoginSystem/>
                <HistoryTable historyData={this.state.historyData} />  
            </Container>
        )
    }
}

export default Body;