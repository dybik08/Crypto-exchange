import React from 'react';
import { logOutUser } from '../../actions/auth_actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'

const Logout = (props: any) => {
    let history = useHistory();

    const onLogoutButtonPress = () => {
        props.log_out();
        history.push('/');
    };

    return <button onClick={onLogoutButtonPress}>Sign out</button>;
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        log_out: () => dispatch(logOutUser()),
    };
};

export default connect(null, mapDispatchToProps)(Logout);
