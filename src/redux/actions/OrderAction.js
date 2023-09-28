import { endPoint } from "../../config/EndPoint";
import { del, get, put } from "../../config/http";
import { UPDATE_ORDER, DELETE_ORDER, GET_ALL_ORDERS } from "../types/Types";
import { toast } from "react-toastify";
export const getAllOrders = (setGetLoading) => async (dispatch) => {
  try {
    setGetLoading(true);
    const res = await get(`${endPoint}api/getAllOrders`);
    dispatch({
      type: GET_ALL_ORDERS,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error.message, "Some error occured");
  } finally {
    setGetLoading(false);
  }
};
export const doUpdateOrder = (data, setSubmitLoading) => async (dispatch) => {
  try {
    setSubmitLoading(true);
    const res = await put(`${endPoint}api/updateOrder`, {
      data,
    });
    if (res.data.data) {
      toast.success("Order Approved Successfully");
    }

    dispatch({
      type: UPDATE_ORDER,
      payload: res.data.data,
    });
  } catch (error) {
    toast.error(error.message);
  } finally {
    setSubmitLoading(false);
  }
};

export const doDeleteOrder =
  (delId, setSubmitLoading, setDelModal) => async (dispatch) => {
    try {
      console.log(delId);
      setSubmitLoading(true);
      const res = await del(`${endPoint}api/deleteOrder/${delId}`);
      dispatch({
        type: DELETE_ORDER,
        payload: delId,
      });
      toast.success("Order Successfully Deleted");
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      setSubmitLoading(false);
      setDelModal(false);
    }
  };
