import React from 'react';
import PairOverbook from './PairOverbook';
import PairData from './PairData';
import PairLastTrades from './PairLastTrades';
import TradingViewWidget from 'react-tradingview-widget';
import {
    Route,
    Redirect,
} from "react-router-dom";


const PairPanel = () => {
    return (
        <div>
            <div style={{display: "flex"}}>
                <div className='overbook'>
                    <PairOverbook />
                </div>
                <div style={{ flex: 2, padding: '10px' }}>
                    <TradingViewWidget symbol='BNBUSDT' locale='pl' autosize />
                </div>
                <div style={{ flex: 2, padding: '10px 20px' }}>
                    <div className='pair-data'>
                        <PairData />
                    </div>
                    <div>
                        <PairLastTrades />
                    </div>
                </div>
            </div>
        </div>
    );
};

// @ts-ignore
const PairPanelRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }: any) =>
                true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default (props: any) => {
    return <PairPanelRoute path={props.path} >
        <PairPanel/>
    </PairPanelRoute>
}
