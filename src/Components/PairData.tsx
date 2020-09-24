import React, { useEffect, useState } from 'react';
import { NetworkService } from '../Services/NetworkService';

interface PairDataProps {}

const PairData: React.FC<PairDataProps> = props => {
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
                    <div key={rowKeys[index]} className='css-1hvp7lu'>
                        <div className='css-busac4'>{row}</div>
                        <div className='css-tn35j6'>
                            {data[rowKeys[index]]} USDT {data['priceChangePercent']} %
                        </div>
                    </div>
                );
            }
            return (
                <div key={rowKeys[index]} className='css-1hvp7lu'>
                    <div className='css-busac4'>{row}</div>
                    <div className='css-tn35j6'>{data[rowKeys[index]]} USDT</div>
                </div>
            );
        });
    };

    return (
        <div className='css-km7ga'>
            <div className='css-4cffwv'>
                <div className='css-1e07uyp'>
                    <div className='css-11y6cix'>BNB/USDT</div>
                    <div className='css-muk5va'>{data.lastPrice} USDT</div>
                </div>
                <div className='css-bf5g5u'>{renderPairData()}</div>
            </div>
        </div>
    );
};

export default PairData;
