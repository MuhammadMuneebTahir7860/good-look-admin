import { endPoint } from "../../config/EndPoint";
import { post } from "../../config/http";

export const doAddAdmin =
  ({ data, Toast, handleCloseUpdate }) =>
  async (dispatch) => {
    console.log(data,'data');
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
