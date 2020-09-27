import React, { useState } from 'react';
import './App.css';
import PairData from './Components/PairData';
import PairOverbook from './Components/PairOverbook';
import PairLastTrades from './Components/PairLastTrades';
import TradingViewWidget  from 'react-tradingview-widget';

function App() {
    // [state, setState] is used when you wish to spy on useState hook during unit testing
    const [state, setState] = useState({
        displayPairData: false,
    });

    const onPairDetailsPress = (visible: boolean) => {
        setState(prevState => ({
            ...prevState,
            displayPairData: visible,
        }));
    };

    return state.displayPairData ? (
        <div className='App'>
            <div>
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
            <div className='button-row'>
                <button onClick={() => onPairDetailsPress(false)}>Hide BNB/USDT details</button>
            </div>
        </div>
    ) : (
        <div className='App'>
            <div className='button-row'>
                <button onClick={() => onPairDetailsPress(true)}>Show BNB/USDT details</button>
            </div>
        </div>
    );
}

export default App;
