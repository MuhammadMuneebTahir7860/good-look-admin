import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../commonComponents/toast/Toast";
import { useNavigate } from "react-router-dom";
import {
  doDeleteOrder,
  doUpdateOrder,
  getAllOrders,
} from "../../redux/actions/OrderAction";

export function UserOrder() {
  const [getLoading, setGetLoading] = useState(false);
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.OrderReducer.allOrders);
  const data = allOrders?.filter((item) => item.isApproved === false);
  useEffect(() => {
    dispatch(getAllOrders(setGetLoading));
  }, []);
  const user = useSelector((state) => state.AuthReducer.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [delId, setDelId] = useState("");
  const [delModal, setDelModal] = useState(false);
  const [clientId, setClientId] = useState("");
  const [viewData, setViewData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };
  const dataViewHandler = (row) => {
    handleCloseModal();
    setViewData(row);
  };
  const ctaApprovedHandler = (row) => {
    const data = {
      isApproved: true,
      _id: row?._id,
    };
    dispatch(doUpdateOrder(data, setSubmitLoading));
  };

  const deleteHandler = (id) => {
    setDelId(id);
    setDelModal(!delModal);
  };
  const ctaDeleteHandler = () => {
    dispatch(doDeleteOrder(delId, Toast, setSubmitLoading, setDelModal));
  };
  return [
    {
      getLoading,
      data,
      profileImg,
      setProfileImg,
      loading,
      name,
      setName,
      contact,
      setContact,
      address,
      setAddress,
      email,
      setEmail,
      submitLoading,
      delModal,
      setDelModal,
      dataViewHandler,
      viewData,
      handleCloseModal,
      openModal,
      ctaApprovedHandler,
      deleteHandler,
      ctaDeleteHandler,
    },
  ];
}
