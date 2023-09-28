import { ADD_SUPPLIER, DELETE_SUPPLIER, GET_SUPPLIERS, GET_SUPPLIER_BY_ID, UPDATE_SUPPLIER } from '../types/Types';
const initialState = {
    suppliers: [],
    supplier: {},
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUPPLIER: {
            return {
                ...state,
                suppliers: [action.payload,...state.suppliers],
            }
        }
        case GET_SUPPLIERS: {
            return {
                ...state,
                suppliers: action.payload,
            }
        }
        case GET_SUPPLIER_BY_ID: {
            return {
                ...state,
                supplier: action.payload,
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
        case UPDATE_SUPPLIER: {
            let updatedSuppliers = [];
            if (state.suppliers?.length > 0) {
                updatedSuppliers = state?.suppliers.map((item) => {
                    if (action.payload._id === item._id) {
                        return { ...action.payload }
                    }
                    else {
                        return item;
                    }

                })
            }
            return {
                ...state,
                supplier: action.payload,
                suppliers: state.suppliers?.length > 0 ? updatedSuppliers : [],
            }
        }
        default:
            return state;
    }
}

export default UserReducer;