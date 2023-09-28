import { UPDATE_ORDER, DELETE_ORDER, GET_ALL_ORDERS } from "../types/Types";
const initialState = {
  allOrders: [],
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS: {
      return {
        ...state,
        allOrders: action.payload,
      };
    }
    case DELETE_ORDER: {
      const newOrders = state.allOrders.filter((item) => {
        if (item._id !== action.payload) {
          return item;
        } else {
          return null;
        }
      });
      return {
        ...state,
        allOrders: [...newOrders],
      };
    }
    case UPDATE_ORDER: {
      let updatedOrders = state.allOrders.map((item) => {
        if (action.payload._id === item._id) {
          return { ...action.payload };
        } else {
          return item;
        }
      });
      return {
        ...state,
        allOrders: updatedOrders,
      };
    }
    default:
      return state;
  }
};

export default OrderReducer;
