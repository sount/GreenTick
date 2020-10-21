import React, { useEffect, useState } from 'react';
import HistoryRow from './HistoryRow';
import axios from 'axios';

const HistoryTable = (props) => {
    // Its important to create a connection between React and the Database
    // 1. connecting 
    // 2. get data from database
    // 3. show result from db
    
    let historyRows = []

    const setHistoryRows = () => {
        props.historyData.forEach(h => {
            historyRows.push(<HistoryRow history={h} key={h.id}/>)
        })
    }

    useEffect(() => {
        console.log(props.historyData)
        setHistoryRows()
      },[]);

    return (
        <div>
            <table>
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