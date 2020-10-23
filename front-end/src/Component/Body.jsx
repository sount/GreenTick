import React, { Component } from 'react';
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
        const dealStyleTable = {
            position: 'absolute', 
            left: '25%', 
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width : "50%",
            padding : "10px"
        }

        const dataVisualization = {
            position : "absolute",
            left : "90%",
            top : "50%",
            transform : "translate(-50%, -50%)",
            width : "50%",
            padding : "10px"
        }

        return(
            <Container>              
                <div className="row">
                    <div style={dealStyleTable} className="col">
                    <HistoryTable historyData={this.state.historyData} />  
                    </div>

                    <div style={dataVisualization} className="col">
                        <h2>Data Visualization</h2>
                    </div>
                </div>
                
                
            </Container>
        )
    }
}

export default Body;