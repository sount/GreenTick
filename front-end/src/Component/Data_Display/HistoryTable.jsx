import React, { useEffect, useState } from 'react';


const HistoryTable = (props) => {
    // Its important to create a connection between React and the Database
    // 1. connecting 
    // 2. get data from database
    // 3. show result from db

    const historyTable = {
        textAlign: "center",
        borderCollapse : "collapse",
        border : "3px solid #ddd",
        width : "100%", 
        backgroundColor : "white"
    }

    const headerTable = {
        backgroundColor : "lightgray",
    }
    
    const boxStyle = {
        padding : "10px",
        margin : "10px"
    }

    const renderTableData = () => {
        return props.historyData.map( (row, index) => {
            return (
                <tr style={headerTable} key={index}>
                    <td>{row.deal_id}</td>
                    <td>{row.deal_time}</td>
                    <td>{row.deal_amount}</td>
                    <td>{row.deal_quantity}</td>
                    <td>{row.deal_type}</td>
                    <td>{row.deal_instrument_id}</td>
                    <td>{row.deal_counterparty_id}</td>
                </tr>
            )
        })
    }

    useEffect(() => {
        console.log(props.historyData)
      },[props.historyData]);

    return (
        <div style={boxStyle}>
            <table style={historyTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Type</th>
                        <th>Instrument ID</th>
                        <th>Counterparty ID</th>
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