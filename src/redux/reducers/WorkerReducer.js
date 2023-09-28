import {
    GET_ALL_WORKERS,
    ADD_WORKER_POST,
    DELETE_WORKER_POST,
    UPDATE_WORKER_POST,
  } from "../types/Types";
  const initialState = {
    isUserLoggedIn: false,
    allWorkers: [],
  };
  
  const WorkerReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_WORKER_POST: {
        return {
          ...state,
          allWorkers: [action.payload, ...state.allWorkers],
        };
      }
      case GET_ALL_WORKERS: {
        return {
          ...state,
          allWorkers: action.payload,
        };
      }
  
      case DELETE_WORKER_POST: {
        const newBlogs = state.allWorkers.filter((item) => {
          if (item._id !== action.payload) {
            return item;
          } else {
            return null;
          }
        });
        console.log(newBlogs, "newBLogs after delete");
        return {
          ...state,
          allWorkers: [...newBlogs],
        };
      }
      case UPDATE_WORKER_POST: {
        let updatedBlogs = state.allWorkers.map((item) => {
          if (action.payload._id === item._id) {
            return { ...action.payload };
          } else {
            return item;
          }
        });
        return {
          ...state,
          allWorkers: updatedBlogs,
        };
      }
      default:
        return state;
    }
  };
  
  export default WorkerReducer;
  