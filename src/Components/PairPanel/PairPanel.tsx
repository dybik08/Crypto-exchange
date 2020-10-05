import React, { useState } from 'react';
import PairOverbook from './PairOverbook';
import PairData from './PairData';
import PairLastTrades from './PairLastTrades';
import TradingViewWidget from 'react-tradingview-widget';
import { Route, Redirect } from 'react-router-dom';

const PairPanel = () => {
    const [state, setState] = useState({
        displayPairData: false,
    });

    const onPairDetailsPress = (visible: boolean) => {
        setState(prevState => ({
            ...prevState,
            displayPairData: visible,
        }));
    };

    return (
        <div>
            {state.displayPairData ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <div className='overbook'>
                            <PairOverbook />
                        </div>
                        <div style={{ flex: 2, padding: '10px' }}>
                            <TradingViewWidget symbol='BNBUSDT' locale='pl' autosize />
                        </div>
                        <div style={{ flex: 1, padding: '10px 20px' }}>
                            <div className='pair-data'>
                                <PairData />
                            </div>
                            <div>
                                <PairLastTrades />
                            </div>
                        </div>
                    </div>
                    <div className='hide-button-row-container'>
                        <div className='button-row'>
                            <button onClick={() => onPairDetailsPress(false)}>Hide BNB/USDT details</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className='show-button-row-container'
                >
                    <div className='button-row'>
                        <button onClick={() => onPairDetailsPress(true)}>Show BNB/USDT details</button>
                    </div>
                </div>
            )}
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
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default (props: any) => {
    return (
        <PairPanelRoute path={props.path}>
            <PairPanel />
        </PairPanelRoute>
    );
};
