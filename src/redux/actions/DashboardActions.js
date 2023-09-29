import { GET_DASHBOARD_STATS } from "../types/Types";
import { endPoint } from "../../config/EndPoint";
import { get } from "../../config/http";

// Get Stats
export const doGetDashboardStats = (setGetLoading) => async (dispatch) => {
  try {
    setGetLoading(true);
    const reports = await get(`${endPoint}api/getDashboardData`);
    dispatch({
      type: GET_DASHBOARD_STATS,
      payload: reports?.data?.data,
    });
  } catch (error) {
    console.log(error?.response?.data?.message);
  } finally {
    setGetLoading(false);
  }
};
