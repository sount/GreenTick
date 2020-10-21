import React, { Component } from 'react';
import History from './Data_Display/HistoryTable';
import LoginSystem from './Login/LoginSystem';
import axios from 'axios'

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
            <div>
                <LoginSystem/>
                <History historyData={this.state.historyData}/>
            </div>
        )
    }
}

export default Body;