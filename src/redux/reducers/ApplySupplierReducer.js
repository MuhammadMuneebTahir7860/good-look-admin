import { GET_SUPPLIER_REQUESTS, DELETE_SUPPLIER_REQUEST } from "../types/Types";
const initialState = {
  applyRequests: [],
};

const ApplySupplierReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUPPLIER_REQUESTS: {
      return {
        ...state,
        applyRequests: action.payload,
      };
    }
    case DELETE_SUPPLIER_REQUEST: {
      const newRequests = state.applyRequests.filter((item) => {
        if (item._id !== action.payload) {
          return item;
        } else {
          return null;
        }
      });
      return {
        ...state,
        applyRequests: [...newRequests],
      };
    }
    default:
      return state;
  }
};

export default ApplySupplierReducer;
