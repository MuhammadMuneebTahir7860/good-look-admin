import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { endPoint } from "../../config/EndPoint";
import { get } from "../../config/http";
import { getSingleProduct } from "../../redux/actions/ProductActions";

export default function UseProductDetail() {
  const [laoding, setLoading] = useState(false);
  const { id } = useParams();
  const productDetail = useSelector(
    (store) => store.ProductReducer.singleProduct
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleProduct(id, setLoading));
  }, []);
  const navigateHandler = async (user) => {
    // try {
    //   const response = await get(
    //     `${endPoint}api/chat/accessExistingChat/${user?._id}`
    //   );
    //   if (response?.data?.chat) {
    //     navigate("/chat", { state: response.data.chat });
    //   } else {
    //     navigate("/chat", { state: user });
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return {
    productDetail,
    laoding,
    navigateHandler,
  };
}
