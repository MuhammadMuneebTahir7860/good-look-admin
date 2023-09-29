import { endPoint } from "../../config/EndPoint";
import {
  ADD_MEASUREMENT_POST,
  DELETE_MEASUREMENT_POST,
  GET_ALL_MEASUREMENT,
  UPDATE_MEASUREMENT_POST,
} from "../types/Types";
import { post, get, del, put } from "../../config/http";

export const getAllBlogs = (setGetLoading) => async (dispatch) => {
  try {
    setGetLoading(true);
    const response = await get(`${endPoint}api/getAllMeasurementPost`);
    dispatch({
      type: GET_ALL_MEASUREMENT,
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
      const res = await post(`${endPoint}api/addMeasurementPost`, data);
      console.log(res.data);
      dispatch({
        type: ADD_MEASUREMENT_POST,
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
      const res = await del(`${endPoint}api/deleteMeasurementPost/${id}`);
      dispatch({
        type: DELETE_MEASUREMENT_POST,
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
      const res = await put(`${endPoint}api/updateMeasurementPost`, {
        data,
      });
      dispatch({
        type: UPDATE_MEASUREMENT_POST,
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
