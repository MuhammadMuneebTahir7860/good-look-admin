import {
  GET_ALL_SERVICES,
  ADD_SERVICE_POST,
  DELETE_SERVICE_POST,
  UPDATE_SERVICE_POST,
} from "../types/Types";
const initialState = {
  isUserLoggedIn: false,
  allServices: [],
};

const ServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE_POST: {
      return {
        ...state,
        allServices: [action.payload, ...state.allServices],
      };
    }
    case GET_ALL_SERVICES: {
      return {
        ...state,
        allServices: action.payload,
      };
    }

    case DELETE_SERVICE_POST: {
      const newBlogs = state.allServices.filter((item) => {
        if (item._id !== action.payload) {
          return item;
        } else {
          return null;
        }
      });
      console.log(newBlogs, "newBLogs after delete");
      return {
        ...state,
        allServices: [...newBlogs],
      };
    }
    case UPDATE_SERVICE_POST: {
      let updatedBlogs = state.allServices.map((item) => {
        if (action.payload._id === item._id) {
          return { ...action.payload };
        } else {
          return item;
        }
      });
      return {
        ...state,
        allServices: updatedBlogs,
      };
    }
    default:
      return state;
  }
};

export default ServiceReducer;
