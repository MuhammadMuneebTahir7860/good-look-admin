import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../commonComponents/toast/Toast";
import {
  deleteSupplierRequest,
  doGetSupplierRequests,
} from "../../redux/actions/ApplySupplierAction";
import {
  doUpdateClient,
} from "../../redux/actions/ClientActions";

export function UseSupplierRequest() {
  const [getLoading, setGetLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(doGetSupplierRequests(setGetLoading,Toast));
  }, []);
  const data = useSelector((state) => state.ApplySupplierReducer.applyRequests);
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
  const uploadImage = async (image) => {
    const formData = new FormData();
    const imgFile = image.target.files[0];
    formData.append("file", imgFile);
    formData.append("upload_preset", "u8wzu4dt");
    try {
      setLoading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dlicwum0v/image/upload",
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
  const imgDeleteHandler = () => {
    setProfileImg("");
  };

  const updateHandler = (item) => {
    setClientId(item?._id);
    setName(item?.name);
    setEmail(item?.email);
    setAddress(item?.address);
    setContact(item?.contact);
    setProfileImg(item?.img);
  };

  const ctaUpdateHandler = async (handleCloseUpdate) => {
    const data = {
      email: email,
      name,
      address,
      contact,
      img: profileImg,
      _id: clientId,
    };
    // dispatch(doUpdateClient(data, Toast, handleCloseUpdate, setSubmitLoading));
  };
  const deleteHandler = (id) => {
    setDelId(id);
    setDelModal(!delModal);
  };
  const ctaDeleteHandler = () => {
    dispatch(
      deleteSupplierRequest(delId, Toast, setSubmitLoading, setDelModal)
    );
  };
  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };
  const dataViewHandler = (row) => {
    handleCloseModal();
    setViewData(row);
  };

  return [
    {
      getLoading,
      data,
      ctaUpdateHandler,
      profileImg,
      setProfileImg,
      updateHandler,
      uploadImage,
      loading,
      imgDeleteHandler,
      name,
      setName,
      contact,
      setContact,
      address,
      setAddress,
      email,
      setEmail,
      submitLoading,
      deleteHandler,
      delModal,
      setDelModal,
      ctaDeleteHandler,
      dataViewHandler,
      viewData,
      handleCloseModal,
      openModal,
    },
  ];
}
