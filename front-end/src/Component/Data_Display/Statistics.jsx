import React, { useEffect } from 'react';


const Statistics = (props) => {
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
        return props.stats.map( (row, index) => {
            return (
                <tr style={headerTable} key={index}>
                    <td style={styleRow}>{row.deal_counterparty}</td>
                    <td style={styleRow}>{row.PL}</td>
                </tr>
            )
        })
    }

    useEffect(() => {
        console.log(props.stats)
      },[props.stats]);

    return (
        <>
            <h1 style={title}>Realized Profit/Loss</h1>
            <table style={historyTable}>
                <thead>
                    <tr style={styleRow}>
                        <th style={styleCol}>Deal Counterparty</th>
                        <th style={styleCol}>PL</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>               
            </table>
        </>
    )
}

export default Statistics;