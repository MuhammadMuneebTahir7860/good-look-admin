import { LOGIN, ACTIVE_USER, LOGOUT, UPDATE_SUPPLIER } from '../types/Types';
const initialState = {
    isUserLoggedIn: false,
    user: {},
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload,
            }
        }
        case ACTIVE_USER: {
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload,
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isUserLoggedIn: false,
                user: {}
            }
        }
        default:
            return state;
    }
}

export default AuthReducer;