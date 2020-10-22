import React, { Component } from 'react'
import ConnectionReport from '../Login/ConnectionReport';

class HistoryRow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <tr>
                <td>{this.props.userId}</td>
                <td>{this.props.title}</td>
                <td>{this.props.completed}</td>
            </tr>
        )
    }

}

export default HistoryRow;