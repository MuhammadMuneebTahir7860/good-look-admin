import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../commonComponents/toast/Toast";
import {
  doDeleteClient,
  doGetClients,
  doUpdateUser,
} from "../../redux/actions/ClientActions";
import { useNavigate } from "react-router-dom";

export function UseServices() {
  const [getLoading, setGetLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(doGetClients(setGetLoading));
  }, []);
  const data = useSelector((state) => state.ClientReducer.clients);
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
      // createAt: new Date(),
    };
    dispatch();
    // doUpdateClient(data, Toast, handleCloseUpdate, setSubmitLoading, user)
  };

  const deleteHandler = (id) => {
    setDelId(id);
    setDelModal(!delModal);
  };
  const ctaDeleteHandler = () => {
    dispatch(doDeleteClient(delId, Toast, setSubmitLoading, setDelModal, user));
  };
  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };
  const dataViewHandler = (row) => {
    handleCloseModal();
    setViewData(row);
  };

  const navigateHandler = (id) => {
    console.log(id, "id");
    navigate(`/products/${id}`);
  };
  const publishHandler = (row) => {
    const data = {
      publish: !row?.publish,
      _id: row?._id,
    };
    dispatch(
      doUpdateUser(
        data,
        Toast,
        setSubmitLoading,
        user,
        data?.publish ? "publishing" : "UnPublishing"
      )
    );
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
      navigateHandler,
      publishHandler,
    },
  ];
}
