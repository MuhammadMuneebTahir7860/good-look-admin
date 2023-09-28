import {
  ADD_SUPPLIER,
  DELETE_CLIENTS,
  DELETE_PRODUCT,
  DELETE_SUPPLIER,
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_SUPPLIERS,
  GET_SUPPLIER_BY_ID,
  UPDATE_CLIENTS,
  UPDATE_PRODUCT,
  UPDATE_SUPPLIER,
} from "../types/Types";
const initialState = {
  allProducts: [],
  singleProduct: {},
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        allProducts: action.payload,
      };
    }
    case GET_SINGLE_PRODUCT: {
      return {
        ...state,
        singleProduct: action.payload,
      };
    }
    case DELETE_PRODUCT: {
      const newProducts = state.allProducts.filter((item) => {
        if (item._id !== action.payload) {
          return item;
        } else {
          return null;
        }
      });
      return {
        ...state,
        allProducts: [...newProducts],
      };
    }
    case UPDATE_PRODUCT: {
      let updatedClients = state.allProducts.map((item) => {
        if (action.payload._id === item._id) {
          return { ...action.payload };
        } else {
          return item;
        }
      });
      return {
        ...state,
        allProducts: updatedClients,
      };
    }
    default:
      return state;
  }
};

export default ProductReducer;
