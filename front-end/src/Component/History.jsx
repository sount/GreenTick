import React from 'react';
import HistoryHeader from './HistoryHeader';
import HistoryBody from './HistoryBody';

const History = () => {
    return (
        <>
            <div>
                <table>
                    <HistoryHeader/>
                    <HistoryBody/>
                </table>
            </div>
        </>
    )
}

export default History;