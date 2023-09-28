import { ADD_SUPPLIER, DELETE_SUPPLIER, GET_SUPPLIERS, GET_SUPPLIER_BY_ID, UPDATE_SUPPLIER } from "../types/Types"
import { endPoint } from '../../config/EndPoint';
import { post, get, del, put } from "../../config/http";
import { doAddAuditLogs } from "./AuditLogsActions";

// Add Supplier
export const doAddSupplier = (data, Toast, handleCloseUpdate, setSubmitLoading, user) => async (dispatch) => {
  try {
    setSubmitLoading(true)
    const res = await post(`${endPoint}api/registerSupplier`, {
      data,
    });
    dispatch({
      type: ADD_SUPPLIER,
      payload: res?.data?.data,
    })
    Toast(res?.data?.msg, "success", "colored");
    handleCloseUpdate();
    dispatch(doAddAuditLogs({
      userName: 'Administrator',
      userRole: user?.role,
      userId: user?._id,
      change: 'Supplier created'
    }))
  }
  catch (error) {
    Toast(error?.response?.data, "error", "colored")
  }
  finally {
    setSubmitLoading(false)
  }
};

// Get Suppliers
export const doGetSuppliers = (setGetLoading) => async (dispatch) => {
  try {
    setGetLoading(true);
    const suppliers = await get(`${endPoint}api/getAllSuppliers`);
    dispatch({
      type: GET_SUPPLIERS,
      payload: suppliers?.data?.data,
    });
  } catch (error) {
    console.log("Some error occured");
  } finally {
    setGetLoading(false);
  }
};

// Delete Supplier

export const doDeleteSupplier = (id, Toast, setSubmitLoading, setDelModal, user) => async (dispatch) => {
  try {
    setSubmitLoading(true);
    const res = await del(`${endPoint}api/deleteSupplier/${id?._id}/${id?.email}`);
    dispatch({
      type: DELETE_SUPPLIER,
      payload: id?._id,
    })
    Toast(res?.data?.msg, "success", "colored");
    dispatch(doAddAuditLogs({
      userName: 'Administrator',
      userRole: user?.role,
      userId: user?._id,
      change: 'Supplier Deleted'
    }))
  }
  catch (error) {
    Toast(error?.response?.data?.msg, "error", "colored");
  }
  finally {
    setSubmitLoading(false)
    setDelModal(false);
  }
};

export const doGetSupplierById = (id, setGetLoading) => async (dispatch) => {
  try {
    setGetLoading(true);
    const supplier = await get(`${endPoint}api/getSupplierById/${id}`);
    dispatch({
      type: GET_SUPPLIER_BY_ID,
      payload: supplier?.data?.data,
    });
  } catch (error) {
    console.log("Some error occured");
  } finally {
    setGetLoading(false);
  }
};

export const doUpdateSupplier = (data, Toast, setSubmitLoading, user, status, name) => async (dispatch) => {
  try {
    setSubmitLoading(true)
    const res = await put(`${endPoint}api/updateSupplier`, {
      data,
    });
    dispatch({
      type: UPDATE_SUPPLIER,
      payload: res.data.data,
    })
    Toast(res?.data?.msg, "success", "colored");
    dispatch(doAddAuditLogs({
      userName: user?.role == 'admin' ? 'Administrator' : user?.name ? user?.name : name,
      userRole: user?.role,
      userId: user?._id,
      change: status == 'publishing' ? 'Supplier Published'
        : status == 'UnPublishing' ? 'Supplier Unpublished'
          : status == 'Profile Updating' ? 'Supplier Profile Edited'
            : status == 'Portfolio editing' ? 'Supplier Portfolio edited'
              : status == 'schedule' ? 'Supplier Schedule Edited' :
                'Supplier edited'
    }))
  }
  catch (error) {
    Toast(error?.response?.data?.msg, "error", "colored")
  }
  finally {
    setSubmitLoading(false)
  }
};
