import { endPoint } from "../../config/EndPoint";
import {
  ADD_BLOG_POST,
  DELETE_BLOG_POST,
  GET_ALL_BLOGS,
  UPDATE_BLOG_POST,
} from "../types/Types";
import { post, get, del, put } from "../../config/http";

export const getAllBlogs = (setGetLoading) => async (dispatch) => {
  try {
    setGetLoading(true);
    const response = await get(`${endPoint}api/getAllBlogPost`);
    dispatch({
      type: GET_ALL_BLOGS,
      payload: response?.data?.data,
    });
  } catch (error) {
    console.log(error.message);
  } finally {
    setGetLoading(false);
  }
};
export const doAddBlog =
  (data, Toast, setSubmitLoading, user) => async (dispatch) => {
    try {
      setSubmitLoading(true);
      console.log("action calling");
      const res = await post(`${endPoint}api/addBlogPost`, data);
      console.log(res, "res after add");
      dispatch({
        type: ADD_BLOG_POST,
        payload: res?.data?.data,
      });
      Toast(res?.data?.msg, "success", "colored");
    } catch (error) {
      Toast(error?.response?.data, "error", "colored");
    } finally {
      setSubmitLoading(false);
    }
  };

export const doDeleteBlog =
  (id, Toast, setSubmitLoading, setDelModal, user) => async (dispatch) => {
    try {
      setSubmitLoading(true);
      const res = await del(`${endPoint}api/deleteBlogPost/${id}`);
      dispatch({
        type: DELETE_BLOG_POST,
        payload: id,
      });
      Toast(res?.data?.msg, "success", "colored");
    } catch (error) {
      Toast(error?.response?.data?.msg, "error", "colored");
    } finally {
      setSubmitLoading(false);
      setDelModal(false);
    }
  };

export const doUpdateBlog =
  (data, Toast, handleCloseUpdate, setSubmitLoading, user) =>
  async (dispatch) => {
    try {
      console.log("update action calling");
      setSubmitLoading(true);
      const res = await put(`${endPoint}api/updateBlogPost`, {
        data,
      });
      console.log(res, "res after update");
      dispatch({
        type: UPDATE_BLOG_POST,
        payload: data,
      });
      Toast(res?.data?.msg, "success", "colored");
      handleCloseUpdate();
    } catch (error) {
      Toast(error?.response?.data?.msg, "error", "colored");
    } finally {
      setSubmitLoading(false);
    }
  };
