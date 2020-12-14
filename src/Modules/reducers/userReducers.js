import {
    LOGIN
    } from '../constants/constants';
    
    export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {

    case LOGIN:
        
    return { loading: false, userInfo: action.payload };

    default:
    return state;
    }
    };