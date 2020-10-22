import React, { useEffect, useState } from 'react';
import HistoryRow from './HistoryRow';
import axios from 'axios';

const HistoryTable = (props) => {
    // Its important to create a connection between React and the Database
    // 1. connecting 
    // 2. get data from database
    // 3. show result from db

    const historyTable = {
        textAlign: "center",
        borderCollapse : "collapse",
        border : "3px solid #ddd",
        width : "50%"
    }
    
    let historyRows = []

    const setHistoryRows = () => {
        props.historyData.forEach(h => {
            console.log(h)
            historyRows.push(<HistoryRow history={h} key={h.id}/>)
        })
    }

    useEffect(() => {
        console.log(props.historyData)
        setHistoryRows()
      },[]);

    return (
        <div>
            <table style={historyTable}>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {historyRows}
                </tbody>               
            </table>
        </div>
    )
}

export default HistoryTable;