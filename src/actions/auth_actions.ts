export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const loginUser = (payload: any) => {
    return {
        type: LOG_IN,
        payload,
    };
};

export const logOutUser = () => {
    return {
        type: LOG_OUT
    };
};
