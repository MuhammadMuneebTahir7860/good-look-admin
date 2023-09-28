import {
  GET_CLIENTS,
  DELETE_CLIENTS,
  UPDATE_CLIENTS,
  UPDATE_USER,
} from "../types/Types";
import { endPoint } from "../../config/EndPoint";
import { get, del, put } from "../../config/http";
import { doAddAuditLogs } from "./AuditLogsActions";

// Get Clients
export const doGetClients = (setGetLoading) => async (dispatch) => {
  try {
    setGetLoading(true);
    const clients = await get(`${endPoint}api/user/getAllUsers`);
    dispatch({
      type: GET_CLIENTS,
      payload: clients?.data?.data,
    });
  } catch (error) {
    console.log("Some error occured");
  } finally {
    setGetLoading(false);
  }
};

// Delete CLient

export const doDeleteClient =
  (delId, Toast, setSubmitLoading, setDelModal, user) => async (dispatch) => {
    try {
      console.log(delId);
      setSubmitLoading(true);
      const res = await del(`${endPoint}api/user/deleteUser/${delId}`);
      console.log(res, "res");
      dispatch({
        type: DELETE_CLIENTS,
        payload: delId,
      });
      Toast(res?.data?.msg, "success", "colored");
    } catch (error) {
      Toast(error?.response?.data?.msg, "error", "colored");
    } finally {
      setSubmitLoading(false);
      setDelModal(false);
    }
  };

export const doUpdateUser =
  (data, Toast, handleCloseUpdate, setSubmitLoading, usere) => async (dispatch) => {
    try {
      setSubmitLoading(true);
      const res = await put(`${endPoint}api/user/updateUser`, {
        data,
      });
      dispatch({
        type: UPDATE_USER,
        payload: res.data.data,
      });
      handleCloseUpdate()
      Toast(res?.data?.msg, "success", "colored");
    } catch (error) {
      Toast(error?.response?.data?.msg, "error", "colored");
    } finally {
      setSubmitLoading(false);
    }
  };
