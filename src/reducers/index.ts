import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer'

const AppReducer = combineReducers({
    auth: auth_reducer
});

export default AppReducer;