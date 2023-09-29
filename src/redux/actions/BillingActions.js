import { endPoint } from "../../config/EndPoint";
import {
  ADD_BILLING_POST,
  DELETE_BILLING_POST,
  GET_ALL_BILLINGS,
  UPDATE_BILLING_POST,
} from "../types/Types";
import { post, get, del, put } from "../../config/http";

export const getAllBlogs = (setGetLoading) => async (dispatch) => {
  try {
    setGetLoading(true);
    const response = await get(`${endPoint}api/getAllBillingsPost`);
    dispatch({
      type: GET_ALL_BILLINGS,
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
      const res = await post(`${endPoint}api/addBillingPost`, data);
      dispatch({
        type: ADD_BILLING_POST,
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
      const res = await del(`${endPoint}api/deleteBillingPost/${id}`);
      dispatch({
        type: DELETE_BILLING_POST,
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
      setSubmitLoading(true);
      const res = await put(`${endPoint}api/updateBillingPost`, {
        data,
      });
      dispatch({
        type: UPDATE_BILLING_POST,
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
