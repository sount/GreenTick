import React, { Component } from 'react';
import axios from 'axios'
import { Container } from 'react-bootstrap';
import HistoryTable from './Data_Display/HistoryTable'
import Statistics from './Data_Display/Statistics';

class Body extends Component {
    state = {
        historyData : [],
        stats : []
    }


    async componentDidMount () {
        const request = {"token":"greentickteamforthewin","limit":10}
        const response = await axios.post('http://localhost:8090/historicaldata', request)

        const jsonRsponse = response.data
        let tempArr = []
        for (let i in jsonRsponse)
            tempArr.push(jsonRsponse[i])

        this.setState({historyData : tempArr})

        const response2 = await axios.post('http://localhost:8090/statistics', request)

        const jsonRsponse2 = response2.data
        let tempArr2 = []
        for (let i in jsonRsponse2)
            tempArr2.push(jsonRsponse2[i])

        this.setState({stats : tempArr2})
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
            left : "75%",
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
                        <Statistics stats={this.state.stats}/>
                    </div>
                </div>
                
                
            </Container>
        )
    }
}

export default Body;