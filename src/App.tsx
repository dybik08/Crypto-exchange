import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginContainer from './Containers/Auth/LoginContainer';
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import PairPanelRoute from './Components/PairPanel/PairPanel'
import Logout from "./Components/Auth/Logout";

function App(props: any) {
    // [state, setState] is used when you wish to spy on useState hook during unit testing
    console.log('app props: ',props)
    const [state, setState] = useState({
        displayPairData: false,
    });

    const onPairDetailsPress = (visible: boolean) => {
        setState(prevState => ({
            ...prevState,
            displayPairData: visible,
        }));
    };

    // return state.displayPairData ? (
    //     <div className='App'>
    //         <div className='button-row'>
    //             <button onClick={() => onPairDetailsPress(false)}>Hide BNB/USDT details</button>
    //         </div>
    //     </div>
    // ) : (
    //     <div className='App'>
    //         <div className='button-row'>
    //             <button onClick={() => onPairDetailsPress(true)}>Show BNB/USDT details</button>
    //         </div>
    //     </div>
    // );

    {/*<LoginContainer/>*/}

    return (
        <>
            <div style={{display: 'flex', justifyContent: "flex-end"}}>
                <Logout/>
            </div>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/login">
                    <LoginContainer />
                </Route>
                <PairPanelRoute path="/pair-panel" />
            </Switch>
        </>

    )
}

export default App;
