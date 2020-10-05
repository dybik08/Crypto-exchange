import {LOG_IN, LOG_OUT} from "../actions/auth_actions";
import {ReduxAction} from "../Constants/types";

const initialState = {
    user: null
};

const auth_reducer = (state = initialState, action: ReduxAction) => {
    switch (action.type) {
        case LOG_IN:
            const user = {
                name: 'guest',
                remember: action.payload.remember
            };

            if(action.payload.remember){
                localStorage.setItem('user', JSON.stringify(user));
            }
            return {
                ...state,
                user
            };
        case LOG_OUT:
            localStorage.removeItem('user');

            return {
                ...state,
                user: null
            };
        default:
            return state
    }
};

export default auth_reducer;