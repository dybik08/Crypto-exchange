import React, { useMemo, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginContainer from './Containers/Auth/LoginContainer';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import PairPanelRoute from './Components/PairPanel/PairPanel';
import Logout from './Components/Auth/Logout';
import { connect } from 'react-redux';

interface AppProps {
    auth: {
        user: {}
    };
}

const App: React.FC<AppProps> = ({ auth }) => {
    return (
        <>
            <div className='sign-out-button-container'>
                {auth.user ? <Logout /> : null}
            </div>
            <Switch>
                <Route exact path='/'>
                    <WelcomePage />
                </Route>
                <Route path='/login'>
                    <LoginContainer />
                </Route>
                <PairPanelRoute path='/pair-panel' />
            </Switch>
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, null)(App);
