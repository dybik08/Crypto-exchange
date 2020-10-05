import React, { useEffect, useState } from 'react';
import { NetworkService } from '../../Services/NetworkService';

const ASKS_COLUMN = 'asks';
const BIDS_COLUMN = 'bids';

const PairOverbook = () => {
    const [depthData, setDepthData] = useState();

    useEffect(() => {
        const fetchData = setInterval(() => {
        NetworkService.fetchPairOverbook('BNBUSDT', setDepthData);
        }, 5000);

        return () => clearInterval(fetchData);
    }, []);

    if (!depthData) {
        return <h1>Loading...</h1>;
    }

    const renderDepthData = (column: string) => {
        const data = column === ASKS_COLUMN ? [...depthData[column]].reverse() : depthData[column];

        return data.map((row: string[], index: number) => {
            return (
                <div key={`${column}-order${index}`} className='data-row'>
                    <div>{parseFloat(row[0]).toFixed(3)}</div>
                    <div>{parseFloat(row[1]).toFixed(3)}</div>
                </div>
            );
        });
    };

    return (
        <div className='overbook-container'>
            <div>
                <div>
                    <h3>ASKS</h3>
                    <div className='data-row'>
                        <div>Price(USDT)</div>
                        <div>Amount(BNB)</div>
                    </div>
                    <div className='overbook-container-depth-data'>{renderDepthData(ASKS_COLUMN)}</div>
                </div>
                <div>
                    <h3>BIDS</h3>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div>Price(USDT)</div>
                        <div>Amount(BNB)</div>
                    </div>
                    <div className='overbook-container-depth-data'>{renderDepthData(BIDS_COLUMN)}</div>
                </div>
            </div>
        </div>
    );
};

export default PairOverbook;
