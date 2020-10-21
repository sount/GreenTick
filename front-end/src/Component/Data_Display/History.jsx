import React, { useEffect, useState } from 'react';
import HistoryHeader from './HistoryHeader';
import HistoryBody from './HistoryBody';
import axios from 'axios';


const History = () => {
    // Its important to create a connection between React and the Database
    // 1. connecting 
    // 2. get data from database
    // 3. show result from db
    
    const [historyData, setHistoryData] = useState({ id : "" });
 
    useEffect(async () => {
        const result = await axios(
          'https://jsonplaceholder.typicode.com/todos/1',
        );
     
        setHistoryData(result.data);
      },[]);

    return (
        <>
            <div>
                <table>
                    <HistoryHeader historyData={historyData}/>
                    <button onClick={historyData}>Test</button>
                    <HistoryBody/>
                </table>
            </div>
        </>
    )
}

export default History;