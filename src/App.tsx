import React, { useState } from 'react';
import './App.css';
import PairData from './Components/PairData';
import PairOverbook from './Components/PairOverbook';

function App() {
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
        state.displayPairData ? <div className='App'>
             <div>
                <div className='overbook'>
                    <PairOverbook />
                </div>
                <div className='pair-data'>
                    <div>
                        <PairData />
                    </div>
                </div>
            </div>
            <div className='button-row'>
                <button onClick={() => onPairDetailsPress(false)}>Hide BNB/USDT details</button>
            </div>
        </div> : <div className='App'>: <div  className='button-row'>
            <button onClick={() => onPairDetailsPress(true)}>Show BNB/USDT details</button>
        </div></div>
    );
}

export default App;
