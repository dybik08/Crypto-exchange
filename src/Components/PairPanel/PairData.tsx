import React, { useEffect, useState } from 'react';
import { NetworkService } from '../../Services/NetworkService';

interface PairDataProps {}

const PairData: React.FC<PairDataProps> = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = setInterval(() => {
            NetworkService.fetchPairData('BNBUSDT', setData);
        }, 5000);

        return () => clearInterval(fetchData);
    }, []);

    const rows: string[] = ['24h Change', '24h High', '24h Low', '24h Volume'];

    const rowKeys: string[] = ['priceChange', 'highPrice', 'lowPrice', 'volume'];

    if (!data) {
        return <h1>Loading...</h1>;
    }

    const renderPairData = () => {
        return rows.map((row, index) => {
            if (rowKeys[index] === 'priceChange') {
                return (
                    <div className='data-row' key={rowKeys[index]}>
                        <div>{row}</div>
                        <div>
                            {data[rowKeys[index]]} USDT {data['priceChangePercent']} %
                        </div>
                    </div>
                );
            }
            return (
                <div className='data-row' key={rowKeys[index]}>
                    <div>{row}</div>
                    <div >{data[rowKeys[index]]} USDT</div>
                </div>
            );
        });
    };

    return (
        <div style={{flex: 1}}>
            <div style={{textAlign: "center", marginBottom: '10px'}}>
                <div>BNB/USDT</div>
                <div>{data.lastPrice} USDT</div>
            </div>
            <div>{renderPairData()}</div>
        </div>
    );
};

export default PairData;
