import React, { useEffect, useState } from 'react';
import { NetworkService } from '../Services/NetworkService';

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
        const data = column === 'asks' ? [...depthData[column]].reverse() : depthData[column];

        return data.map((row: string[], index: number) => {
            return (
                <div key={`${column}-order${index}`} className='css-1hvp7lu'>
                    <div className='css-busac4'>{parseFloat(row[0]).toFixed(3)}</div>
                    <div className='css-tn35j6'>{parseFloat(row[1]).toFixed(3)}</div>
                </div>
            );
        });
    };

    return (
        <div className='css-km7ga'>
            <div>
                <div>
                    <h3>ASKS</h3>
                    <div>
                        <div>Price(USDT)</div>
                        <div>Amount(BNB)</div>
                    </div>
                    <div className='css-bf5g5u'>{renderDepthData('asks')}</div>
                </div>
                <div>
                    <h3>BIDS</h3>
                    <div>
                        <div>Price(USDT)</div>
                        <div>Amount(BNB)</div>
                    </div>
                    <div className='css-bf5g5u'>{renderDepthData('bids')}</div>
                </div>
            </div>
        </div>
    );
};

export default PairOverbook;
