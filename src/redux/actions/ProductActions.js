import {
  DELETE_PRODUCT,
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  UPDATE_PRODUCT,
} from "../types/Types";
import { endPoint } from "../../config/EndPoint";
import { get, del, put } from "../../config/http";
import { toast } from "react-toastify";

export const getAllProducts = (setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const allProducts = await get(`${endPoint}api/getAllProducts`);
    dispatch({
      type: GET_PRODUCTS,
      payload: allProducts?.data?.data,
    });
  } catch (error) {
    console.log("Some error occured");
  } finally {
    setLoading(false);
  }
};
export const getSingleProduct = (id, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const response = await get(`${endPoint}api/getSingleProduct/${id}`);
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: response.data.data,
    });
  } catch (error) {
    console.log("Some error occured");
  } finally {
    setLoading(false);
  }
};
export const doDeleteProduct = (delId, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const res = await del(`${endPoint}api/deleteProduct/${delId}`);
    if (res) {
      toast.success("Deleted Successfully");
    }
    dispatch({
      type: DELETE_PRODUCT,
      payload: delId,
    });
  } catch (error) {
    console.log("Some error occured");
  } finally {
    setLoading(false);
  }
};

export const doUpdateProduct =
  (data, setLoading, navigate) => async (dispatch) => {
    try {
      setLoading(true);
      const res = await put(`${endPoint}api/updateProduct`, {
        data,
      });
      if (res.data.data) {
        toast.success("Update Successfully");
      }
      dispatch({
        type: UPDATE_PRODUCT,
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
