import React, { useEffect, useState } from 'react';
import { NetworkService } from '../Services/NetworkService';
import * as moment from 'moment';

type LatestTradeData = {
    id: number
    price: string
    qty: string
    quoteQty: string
    time: number
}

const PairLastTrades = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = setInterval(() => {
            NetworkService.fetchLastPairTrades('BNBUSDT', setData);
        }, 5000);
        return () => clearInterval(fetchData);
    }, []);

    if (!data) {
        return <h1>Loading...</h1>;
    }

    const renderLastTrades = () => {
        return data.map((lastTrade: LatestTradeData) => {
            return (
                <div key={lastTrade.id} className="latest-trade-row">
                    <div>{parseFloat(lastTrade.price).toFixed(3)}</div>
                    <div>{parseFloat(lastTrade.qty).toFixed(3)}</div>
                    <div>{moment.unix(lastTrade.time / 1000).format('HH:mm:ss')}</div>
                </div>
            );
        });
    };

    return (
        <div>
            <h1>Latest trades</h1>
            <div className='latest-trade-row'>
                <div>Price(USDT)</div>
                <div>Amount(BNB)</div>
                <div>Time</div>
            </div>
            <div>
                <div>{renderLastTrades()}</div>
            </div>
        </div>
    );
};

export default PairLastTrades;
