import React, { Component } from 'react'
import ConnectionReport from '../Login/ConnectionReport';

class HistoryRow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <tr>
                <td>{this.props.history.deal_id}</td>
                <td>{this.props.history.deal_amount}</td>
                <td>{this.props.history.deal_quantity}</td>
            </tr>
        )
    }

}

export default HistoryRow;