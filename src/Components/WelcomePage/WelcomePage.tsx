import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import {loginUser} from "../../actions/auth_actions";
import {connect} from 'react-redux';

const WelcomePage = (props: any) => {
    let history = useHistory();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if(user){
            props.loginUser(JSON.parse(user))
            history.push('/pair-panel')
        }
    }, []);

    return (
        <div style={{textAlign: 'center', height: '100vh', justifyContent: "center", alignItems: "center", display: "flex" }}>
            <h1>Welcome Page</h1>
            <Link to='/login' >Sign in</Link>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        loginUser: (data: any) => dispatch(loginUser(data))
    }
};

export default connect(null, mapDispatchToProps)(WelcomePage);
