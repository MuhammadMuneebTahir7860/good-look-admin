import {
    ADD_MEASUREMENT_POST,
    DELETE_MEASUREMENT_POST,
    GET_ALL_MEASUREMENT,
    UPDATE_MEASUREMENT_POST,
  } from "../types/Types";
  const initialState = {
    isUserLoggedIn: false,
    allMeasurements: [],
  };
  
  const MeasurementReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MEASUREMENT_POST: {
        return {
          ...state,
          allMeasurements: [action.payload, ...state.allMeasurements],
        };
      }
      case GET_ALL_MEASUREMENT: {
        return {
          ...state,
          allMeasurements: action.payload,
        };
      } 
      
      case DELETE_MEASUREMENT_POST: {
        const newBlogs = state.allMeasurements.filter((item) => {
          if (item._id !== action.payload) {
            return item;
          } else {
            return null;
          }
        });
        return {
          ...state,
          allMeasurements: [...newBlogs],
        };
      }
      case UPDATE_MEASUREMENT_POST: {
        let updatedBlogs = state.allMeasurements.map((item) => {
          if (action.payload._id === item._id) {
            return { ...action.payload };
          } else {
            return item;
          }
        });
        return {
          ...state,
          allMeasurements: updatedBlogs,
        };
      }
      default:
        return state;
    }
  };
  
  export default MeasurementReducer;
  