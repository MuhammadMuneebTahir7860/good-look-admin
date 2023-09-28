import {
  ADD_SUPPLIER,
  DELETE_CLIENTS,
  DELETE_SUPPLIER,
  GET_CLIENTS,
  GET_SUPPLIERS,
  GET_SUPPLIER_BY_ID,
  UPDATE_CLIENTS,
  UPDATE_SUPPLIER,
  UPDATE_USER,
} from "../types/Types";
const initialState = {
  clients: [],
};

const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS: {
      return {
        ...state,
        clients: action.payload,
      };
    }
    case DELETE_CLIENTS: {
      const newClients = state.clients.filter((item) => {
        if (item._id !== action.payload) {
          return item;
        } else {
          return null;
        }
      });
      return {
        ...state,
        clients: [...newClients],
      };
    }
    case UPDATE_USER: {
      let updatedClients = state.clients.map((item) => {
        if (action.payload._id === item._id) {
          return { ...action.payload };
        } else {
          return item;
        }
      });
      return {
        ...state,
        clients: updatedClients,
      };
    }
    default:
      return state;
  }
};

export default ClientReducer;
