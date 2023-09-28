import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../commonComponents/toast/Toast";
import {
  doDeleteClient,
  doGetClients,
  doUpdateClient,
  doUpdateUser,
} from "../../redux/actions/ClientActions";
import { useNavigate } from "react-router-dom";
import {
  doDeleteOrder,
  doUpdateOrder,
  getAllOrders,
} from "../../redux/actions/OrderAction";

export function UseCustomer() {
  const [getLoading, setGetLoading] = useState(false);
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.OrderReducer.allOrders);
  const [paymentApproved, setPaymentApproved] = useState(true);

  const data = allOrders?.filter(
    (item) => item.isApproved === true && item.paymentApproved === true
  );
  useEffect(() => {
    dispatch(getAllOrders(setGetLoading));
  }, []);
  const user = useSelector((state) => state.AuthReducer.user);
  const [name, setName] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [delId, setDelId] = useState("");
  const [delModal, setDelModal] = useState(false);
  const [clientId, setClientId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [viewData, setViewData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const uploadImage = async (image, setImage, id) => {
    // setImgId(id);
    const formData = new FormData();
    const imgFile = image.target.files[0];
    formData.append("file", imgFile);
    formData.append("upload_preset", "CrudImages");

    try {
      setLoading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dwgjwetes/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const json = await res.json();
      const data = json;
      setProfileImg(data?.secure_url);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };
  const dataViewHandler = (row) => {
    handleCloseModal();
    setViewData(row);
  };
  const deleteHandler = (id) => {
    setDelId(id);
    setDelModal(!delModal);
  };

  const ctaDeleteHandler = () => {
    dispatch(doDeleteOrder(delId, Toast, setSubmitLoading, setDelModal, user));
  };
  const updateHandler = (row) => {
    setOrderId(row?._id);
    setPaymentApproved(row?.paymentApproved);
    setName(row?.userId?.name);
    setProductTitle(row?.productId?.title);
    setSellerName(row?.sellerId?.name);
    setContact(row?.userId?.contact);
    setSellerEmail(row?.sellerId?.email);
    setEmail(row?.userId?.email);
  };
  const ctaUpdateHandler = async (handleCloseUpdate) => {
    const data = {
      paymentApproved: paymentApproved,
      _id: orderId,
      img: profileImg,
    };
    // dispatch(doUpdateOrder(data, setSubmitLoading, handleCloseUpdate));
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
      sellerName,
      setSellerName,
      productTitle,
      setProductTitle,
      submitLoading,
      delModal,
      setDelModal,
      dataViewHandler,
      viewData,
      handleCloseModal,
      openModal,
      deleteHandler,
      ctaDeleteHandler,
      updateHandler,
      ctaUpdateHandler,
      sellerEmail,
      setSellerEmail,
      email,
      setEmail,
      uploadImage,
      paymentApproved,
      setPaymentApproved,
    },
  ];
}
