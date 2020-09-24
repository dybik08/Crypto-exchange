import React, { useEffect, useState } from 'react';
import axios from 'axios';

const mockData = {
    askPrice: '23.05230000',
    askQty: '23.17700000',
    bidPrice: '23.04380000',
    bidQty: '1.87300000',
    closeTime: 1600896265293,
    count: 186051,
    firstId: 80270106,
    highPrice: '24.34370000',
    lastId: 80456156,
    lastPrice: '23.05240000',
    lastQty: '5.01000000',
    lowPrice: '22.45140000',
    openPrice: '24.07750000',
    openTime: 1600809865293,
    prevClosePrice: '24.07940000',
    priceChange: '-1.02510000',
    priceChangePercent: '-4.257',
    quoteVolume: '71683218.10397070',
    symbol: 'BNBUSDT',
    volume: '3030147.82800000',
    weightedAvgPrice: '23.65667359',
};

const dataKeys = ['lastPrice', 'priceChange', 'priceChangePercent', 'highPrice', 'lowPrice', 'volume'];

const PairData = () => {
    const [data, setData] = useState();

    useEffect(() => {
        if (!data) {
            const url = 'https://api.binance.com/api/v3/ticker/24hr?symbol=BNBUSDT';

            const fetchData = setInterval(() => {
                axios.get(url).then(res => {
                    console.log('data: ', res.data);
                    const pairData = Object.entries(res.data).reduce((prev: any, [key, value]: any) => {
                        if (dataKeys.includes(key)) {
                            return {
                                ...prev,
                                [key]: value,
                            };
                        }

                        return prev;
                    }, {});

                    console.log('pairData: ', pairData);
                    setData(pairData);
                });
            }, 1000);

            return () => clearInterval(fetchData)
        }
    }, []);

    const rows = ['24h Change', '24h High', '24h Low', '24h Volume'];

    const rowKeys = ['priceChange', 'highPrice', 'lowPrice', 'volume'];

    if (!data) {
        return null;
    }

    const renderPairData = () => {
        return rows.map((row, index) => {
            if (rowKeys[index] === 'priceChange') {
                return (
                    <div className='css-1hvp7lu'>
                        <div className='css-busac4'>{row}</div>
                        <div className='css-tn35j6'>
                            {data[rowKeys[index]]} {data['priceChangePercent']}
                        </div>
                    </div>
                );
            }
            return (
                <div className='css-1hvp7lu'>
                    <div className='css-busac4'>{row}</div>
                    <div className='css-tn35j6'>{data[rowKeys[index]]}</div>
                </div>
            );
        });
    };

    return (
        <div className='css-km7ga'>
            <div className='css-4cffwv'>
                <div className='css-1e07uyp'>
                    <div className='css-11y6cix'>BNB/USDT</div>
                    <div className='css-muk5va'>{data.lastPrice}</div>
                </div>
                <div className='css-bf5g5u'>{renderPairData()}</div>
            </div>
        </div>
    );
};

export default PairData;
