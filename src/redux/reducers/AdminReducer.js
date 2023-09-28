import { ADD_SUPPLIER, DELETE_SUPPLIER, GET_SUPPLIERS } from '../types/Types';
const initialState = {
    suppliers: [],
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUPPLIER: {
            return {
                ...state,
                suppliers: [...state.suppliers, action.payload],
            }
        }
        case GET_SUPPLIERS: {
            return {
                ...state,
                suppliers: action.payload,
            }
        }
        case DELETE_SUPPLIER: {
            const newSuppliers = state.suppliers.filter((item) => {
                if (item._id !== action.payload) {
                    return item;
                } else {
                    return null;
                }
            });
            return {
                ...state,
                suppliers: [...newSuppliers],
            };
        }
        default:
            return state;
    }
}

export default UserReducer;