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
    
    const renderTableData = () => {
        return props.historyData.map( (row, index) => {
            return (
                <tr key={index}>
                    <td>{row.deal_id}</td>
                    <td>{row.deal_amount}</td>
                    <td>{row.deal_quantity}</td>
                </tr>
            )
        })
    }

    useEffect(() => {
        console.log(props.historyData)
      },[props.historyData]);

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
                    {renderTableData()}
                </tbody>               
            </table>
        </div>
    )
}

export default HistoryTable;