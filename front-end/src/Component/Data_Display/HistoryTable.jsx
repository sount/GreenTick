import React, { useEffect } from 'react';


const HistoryTable = (props) => {
    // Its important to create a connection between React and the Database
    // 1. connecting 
    // 2. get data from database
    // 3. show result from db

    const historyTable = {
        textAlign: "center",
        fontFamily : "Trebuchet MS",
        borderCollapse : "collapse",
        border : "3px solid #ddd",
        backgroundColor : "white",
        maxWidth : "100%",
        overflow : "scroll",
    }

    const headerTable = {
        backgroundColor : "lightgray",
        border : "1px solid black"
    }

    const title = {
        textAlign : "center",
        fontFamily : "arial, sans-serif"
    } 

    const styleRow = {
        border : "1px solid black",
    }

    const styleCol = {
        paddingTop : "12px",
        paddingBottom : "12px",
        backgroundColor : "#90EE90",
        width : "10%",
        border : "1px solid black",
        margin : "auto"
    }

    const renderTableData = () => {
        return props.historyData.map( (row, index) => {
            return (
                <tr style={headerTable} key={index}>
                    <td style={styleRow}>{row.deal_id}</td>
                    <td style={styleRow}>{row.deal_time}</td>
                    <td style={styleRow}>{row.deal_amount}</td>
                    <td style={styleRow}>{row.deal_quantity}</td>
                    <td style={styleRow}>{row.deal_type}</td>
                    <td style={styleRow}>{row.deal_instrument_id}</td>
                    <td style={styleRow}>{row.deal_counterparty_id}</td>
                </tr>
            )
        })
    }

    useEffect(() => {
        console.log(props.historyData)
      },[props.historyData]);

    return (
        <>
            <h1 style={title}>Historic Data</h1>
            <table style={historyTable}>
                <thead>
                    <tr style={styleRow}>
                        <th style={styleCol}>ID</th>
                        <th style={styleCol}>Time</th>
                        <th style={styleCol}>Amount</th>
                        <th style={styleCol}>Quantity</th>
                        <th style={styleCol}>Type</th>
                        <th style={styleCol}>Instrument ID</th>
                        <th style={styleCol}>Counterparty ID</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>               
            </table>
        </>
    )
}

export default HistoryTable;