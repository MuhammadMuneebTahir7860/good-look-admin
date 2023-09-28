import {
  ADD_BLOG_POST,
  DELETE_BLOG_POST,
  GET_ALL_BLOGS,
  UPDATE_BLOG_POST,
} from "../types/Types";
const initialState = {
  isUserLoggedIn: false,
  allBlogs: [],
};

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST: {
      return {
        ...state,
        allBlogs: [action.payload, ...state.allBlogs],
      };
    }
    case GET_ALL_BLOGS: {
      return {
        ...state,
        allBlogs: action.payload,
      };
    } 
    
    case DELETE_BLOG_POST: {
      const newBlogs = state.allBlogs.filter((item) => {
        if (item._id !== action.payload) {
          return item;
        } else {
          return null;
        }
      });
      console.log(newBlogs, "newBLogs after delete");
      return {
        ...state,
        allBlogs: [...newBlogs],
      };
    }
    case UPDATE_BLOG_POST: {
      let updatedBlogs = state.allBlogs.map((item) => {
        if (action.payload._id === item._id) {
          return { ...action.payload };
        } else {
          return item;
        }
      });
      return {
        ...state,
        allBlogs: updatedBlogs,
      };
    }
    default:
      return state;
  }
};

export default BlogReducer;
