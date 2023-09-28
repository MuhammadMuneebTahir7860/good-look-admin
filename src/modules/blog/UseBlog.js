import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../commonComponents/toast/Toast";
import {
  doDeleteClient,
  doGetClients,
  doUpdateClient,
} from "../../redux/actions/ClientActions";
import {
  doAddBlog,
  doDeleteBlog,
  doUpdateBlog,
  getAllBlogs,
} from "../../redux/actions/BlogActions";
import { doAddSupplier } from "../../redux/actions/SupplierActions";

export function UseBlog() {
  const [getLoading, setGetLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(doGetClients(setGetLoading));
  }, []);
  useEffect(() => {
    dispatch(getAllBlogs(setGetLoading));
  }, []);

  const data = useSelector((state) => state.BlogReducer?.allBlogs);
  const user = useSelector((state) => state.AuthReducer.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [description, setDescription] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [delId, setDelId] = useState("");
  const [delModal, setDelModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [blogId, setBlogId] = useState("");
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
    setBlogId(item?._id);
    setBlogTitle(item?.title);
    setDescription(item?.description);
    setProfileImg(item?.img);
    setIsEdit(true);
  };

  const ctaUpdateHandler = async (handleCloseUpdate) => {
    const data = {
      title: blogTitle,
      description: description,
      img: profileImg,
      _id: blogId,
    };
    console.log(data,'data');
    dispatch(
      doUpdateBlog(data, Toast, handleCloseUpdate, setSubmitLoading, user)
    );
    setIsEdit(false);
  };

  const deleteHandler = (id) => {
    setDelId(id);
    setDelModal(!delModal);
  };
  const ctaDeleteHandler = () => {
    dispatch(doDeleteBlog(delId, Toast, setSubmitLoading, setDelModal, user));
  };
  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };

  const addBlogHandler = (handleCloseUpdate) => {
    let data = {
      title: blogTitle,
      description: description,
      img: profileImg ? profileImg : "",
      createdAt: new Date(),
    };
    dispatch(doAddBlog(data, Toast, setSubmitLoading, user));
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
      blogTitle,
      description,
      setDescription,
      setBlogTitle,
      addBlogHandler,
      isEdit,
      setIsEdit,
    },
  ];
}
