import { ADD_AUDIT_LOGS, GET_AUDIT_LOGS, DELETE_AUDIT_LOGS } from "../types/Types"
import { endPoint } from '../../config/EndPoint';
import { post, get, del, put } from "../../config/http";

// Add Audit Logs
export const doAddAuditLogs = (data) => async (dispatch) => {
    try {
        const res = await post(`${endPoint}api/save-audit-logs`, {
            data,
        });
        dispatch({
            type: ADD_AUDIT_LOGS,
            payload: res?.data?.data,
        })
    }
    catch (error) {
        console.log(error?.response?.data)
    }
}


// Get Audit Logs
export const doGetAuditLogs = (setGetLoading, Toast) => async (dispatch) => {
    try {
        setGetLoading(true)
        const auditLogs = await get(`${endPoint}api/get-all-saved-audit-logs`);
        dispatch({
            type: GET_AUDIT_LOGS,
            payload: auditLogs?.data?.data,
        })
    }
    catch (error) {
        Toast('Some error occured');
    }
    finally {
        setGetLoading(false)
    }
}

// Delete Audit Logs

export const doDeleteAuditLogs = (id, Toast, setSubmitLoading, setDelModal) => async (dispatch) => {
    try {
        setSubmitLoading(true);
        const res = await del(`${endPoint}api/delete-audit-logs/${id}`);
        dispatch({
            type: DELETE_AUDIT_LOGS,
            payload: id,
        })
        Toast(res?.data?.msg, "success", "colored")
    }
    catch (error) {
        Toast(error?.response?.data?.msg, "error", "colored");
    }
    finally {
        setSubmitLoading(false)
        setDelModal(false);
    }
}
