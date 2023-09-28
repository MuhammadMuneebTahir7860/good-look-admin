import { endPoint } from "../../config/EndPoint";
import { GET_SUPPLIER_REQUESTS, DELETE_SUPPLIER_REQUEST } from "../types/Types";
import {  get, del} from "../../config/http";

export const doGetSupplierRequests = (setLoading,Toast) => async (dispatch) => {
  try {
    setLoading(true);
    const value = await get(`${endPoint}api/getSupplierRequests`);
    dispatch({
      type: GET_SUPPLIER_REQUESTS,
      payload: value?.data?.data,
    });
  } catch (error) {
    Toast('Some error occured', "error", "colored");
  } finally {
    setLoading(false);
  }
};
export const deleteSupplierRequest =
  (id, Toast, setSubmitLoading, setDelModal) => async (dispatch) => {
    try {
      setSubmitLoading(true);
      const res = await del(`${endPoint}api/deleteRequest/${id}`);
      dispatch({
        type: DELETE_SUPPLIER_REQUEST,
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
