import { endPoint } from "../../config/EndPoint";
import {
  ADD_SERVICE_POST,
  DELETE_SERVICE_POST,
  GET_ALL_SERVICES,
  UPDATE_SERVICE_POST,
} from "../types/Types";
import { post, get, del, put } from "../../config/http";

export const getAllBlogs = (setGetLoading) => async (dispatch) => {
  try {
    setGetLoading(true);
    const response = await get(`${endPoint}api/getAllServicePost`);
    dispatch({
      type: GET_ALL_SERVICES,
      payload: response?.data?.data,
    });
  } catch (error) {
    console.log(error.message);
  } finally {
    setGetLoading(false);
  }
};
export const doAddBlog =
  (data, Toast, setSubmitLoading, user, handleCloseUpdate) =>
  async (dispatch) => {
    try {
      setSubmitLoading(true);
      const res = await post(`${endPoint}api/addServicePost`, data);
      dispatch({
        type: ADD_SERVICE_POST,
        payload: res?.data?.data,
      });
      handleCloseUpdate();
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
      const res = await del(`${endPoint}api/deleteServicePost/${id}`);
      dispatch({
        type: DELETE_SERVICE_POST,
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
      const res = await put(`${endPoint}api/updateServicePost`, {
        data,
      });
      console.log(res, "res after update");
      dispatch({
        type: UPDATE_SERVICE_POST,
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
