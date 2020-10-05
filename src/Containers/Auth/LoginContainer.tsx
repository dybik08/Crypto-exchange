import Login from '../../Components/Auth/Login';
import { connect } from 'react-redux';
import {loginUser} from "../../actions/auth_actions";

const mapStateToProps = (state: any) => {
    return {
        ...state,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        log_in: (data: any) => dispatch(loginUser(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
