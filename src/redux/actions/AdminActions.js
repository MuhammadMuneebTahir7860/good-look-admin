import { endPoint } from "../../config/EndPoint";
import { post } from "../../config/http";
import axios from "axios";
import { UPDATE_ADMIN } from "../types/Types";
export const doAddAdmin =
  ({ data, Toast, handleCloseUpdate }) =>
  async (dispatch) => {
    console.log(data, "data");
    try {
      //   setSubmitLoading(true);
      const res = await post(`${endPoint}api/registerAdmin`, {
        data,
      });
      console.log(res, "res");
      Toast(res?.data?.msg, "success", "colored");
      //   handleCloseUpdate();
    } catch (error) {
      console.log(error.message);
      //   Toast(error?.response?.data, "error", "colored");
    } finally {
      //   setSubmitLoading(false);
    }
  };

export const doUpdateAdmin =
  (userData, Toast, setSubmitLoading) => async (dispatch) => {
    try {
      setSubmitLoading(true);
      const res = await axios.put(`${endPoint}api/updateAdmin`, {
        userData,
      });
      dispatch({
        type: UPDATE_ADMIN,
        payload: res.data.data,
      });
      Toast(res?.data?.msg, "success", "colored");
    } catch (error) {
      Toast(error?.response?.data?.msg, "error", "colored");
    } finally {
      setSubmitLoading(false);
    }
  };
