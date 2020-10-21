import React, { Component } from 'react'
import ConnectionReport from '../Login/ConnectionReport';

class HistoryHeader extends Component {
    constructor(props) {
        super(props)
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }

    getKeys = function() {

    }

    getRowsData = function() {

    }

    getHeader = function() {

    }

    render() {
        return(
            <div>
                <table>
                    <thead>
                        <tr>{this.props.historyData}</tr>
                    </thead>

                    <tbody>
                        {this.getRowsData}
                    </tbody>
                </table>
            </div>
        )
    }

}
const RenderRow = (props) => {}

export default HistoryHeader;