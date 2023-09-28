import { endPoint } from "../../config/EndPoint";
import { LOGIN, ACTIVE_USER, LOGOUT, UPDATE_SUPPLIER } from "../types/Types";
import { post, get, del, put } from "../../config/http";
import axios from "axios";
export const doLogin =
  (email, password, setLoading, Toast) => async (dispatch) => {
    try {
      setLoading(true);
      const user = await post(`${endPoint}api/loginAdmin`, {
        email,
        password,
      });
      await window.localStorage.setItem("adminToken", user.data.data.token);
      axios.defaults.headers.common["adminToken"] = user.data.data.token;
      dispatch({
        type: LOGIN,
        payload: user?.data?.data,
      });
      Toast("Login Successfully", "success", "colored");
    } catch (error) {
      Toast(error?.response?.data.msg, "error", "colored");
    } finally {
      setLoading(false);
    }
  };

export const doGetLoggedInUser =
  (setLoading, token, Toast) => async (dispatch) => {
    try {
      setLoading(true);
      const user = await post(`${endPoint}api/getLoggedInAdmin`, {
        token: token,
      });
      dispatch({
        type: ACTIVE_USER,
        payload: user?.data?.data,
      });
      Toast("Welcome Back!", "success", "colored");
    } catch (error) {
      Toast(error?.response?.data?.message, "error", "colored");
    } finally {
      setLoading(false);
    }
  };

export const doLogout = (Toast) => async (dispatch) => {
  try {
    await window.localStorage.removeItem("token");
    dispatch({
      type: LOGOUT,
      payload: null,
    });
    Toast("Logout Successfully", "success", "colored");
  } catch (error) {
    console.log(error?.message);
  }
};

// export const getAllProducts = (Toast) => async (dispatch) => {
//   try {
//     await window.localStorage.removeItem("token");
//     dispatch({
//       type: LOGOUT,
//       payload: null,
//     });
//     Toast("Logout Successfully", "success", "colored");
//   } catch (error) {
//     console.log(error?.message);
//   }
// };

export const doForgotPasswordSendOtp =
  (email, setLoading, setError, setStep, role) => async (dispatch) => {
    try {
      setLoading(true);
      const user = await post(`${endPoint}api/user/sendOtp`, {
        email: email,
        role: role,
      });
      setStep(2);
      setError("");
      return;
    } catch (error) {
      setError(error?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };
export const doForgotPasswordVerifyOtp =
  (otp, email, setLoading, setError, setStep, role) => async (dispatch) => {
    try {
      setLoading(true);
      const res = await post(`${endPoint}api/user/verifyOtp`, {
        code: otp,
        email,
        role,
      });
      if (res.data?.msg == "correct") {
        setStep(3);
        setError("");
      }
      return;
    } catch (error) {
      setError(error?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };
export const doForgotPasswordSavePassword =
  (email, password, otp, setLoading, setError, setStep, navigate, role) =>
  async (dispatch) => {
    try {
      setLoading(true);
      const res = await post(`${endPoint}api/user/savePassword`, {
        password,
        email,
        otp,
        role: role,
      });
      if (res.data?.msg == "saved") {
        await post(`${endPoint}api/save-audit-logs`, {
          data: {
            userName:
              role == "admin"
                ? email
                : res?.data?.data?.name
                ? res?.data?.data?.name
                : email,
            userRole: role,
            userId: res?.data?.data?._id,
            change: `${role} used Forgot Password`,
          },
        });
        navigate("/login");
        setError("");
        setStep(0);
      }
      return;
    } catch (error) {
      setError(error?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };
