import {
    ADD_BILLING_POST,
    DELETE_BILLING_POST,
    GET_ALL_BILLINGS,
    UPDATE_BILLING_POST,
  } from "../types/Types";
  const initialState = {
    isUserLoggedIn: false,
    allBillings: [],
  };
  
  const BillingReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_BILLING_POST: {
        return {
          ...state,
          allBillings: [action.payload, ...state.allBillings],
        };
      }
      case GET_ALL_BILLINGS: {
        return {
          ...state,
          allBillings: action.payload,
        };
      } 
      
      case DELETE_BILLING_POST: {
        const newBlogs = state.allBillings.filter((item) => {
          if (item._id !== action.payload) {
            return item;
          } else {
            return null;
          }
        });
        return {
          ...state,
          allBillings: [...newBlogs],
        };
      }
      case UPDATE_BILLING_POST: {
        let updatedBlogs = state.allBillings.map((item) => {
          if (action.payload._id === item._id) {
            return { ...action.payload };
          } else {
            return item;
          }
        });
        return {
          ...state,
          allBillings: updatedBlogs,
        };
      }
      default:
        return state;
    }
  };
  
  export default BillingReducer;
  