import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../commonComponents/toast/Toast";
import {
  doGetSupplierById,
  doUpdateSupplier,
} from "../../redux/actions/SupplierActions";

export default function UsePortfolio() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AuthReducer.user);
  const portfolio = useSelector((state) => state.SupplierReducer.supplier);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [instagram, setInstagram] = useState("");
  const [messanger, setMessanger] = useState("");
  const [contact, setContact] = useState("");
  const [about, setAbout] = useState("");
  const [discount, setDiscount] = useState("");
  const [customCtg, setCustomCtg] = useState("");
  const [video, setVideo] = useState(data?.video ? data?.video : "");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (data) {
      dispatch(doGetSupplierById(data?._id, setLoading));
    }
  }, [data]);
  useEffect(() => {
    if (portfolio) {
      setCategory(portfolio?.category ? portfolio?.category : "");
      setInstagram(portfolio?.instagram ? portfolio?.instagram : "");
      setMessanger(portfolio?.messanger ? portfolio?.messanger : "");
      setContact(portfolio?.contact ? portfolio?.contact : "");
      setAbout(portfolio?.about ? portfolio?.about : "");
      setVideo(portfolio?.video ? portfolio?.video : "");
      setThumbnail(portfolio?.thumbnail ? portfolio?.thumbnail : "");
      setImages(portfolio?.images ? portfolio?.images : []);
      setDiscount(portfolio?.discount ? portfolio?.discount : "");
    }
  }, [portfolio]);

  const uploadVideo = async (video) => {
    const formData = new FormData();
    const imgFile = video.target.files[0];
    formData.append("file", imgFile);
    formData.append("upload_preset", "u8wzu4dt");
    try {
      setSubmitLoading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dlicwum0v/video/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const json = await res.json();
      const data = json;
      setVideo(data?.secure_url);
    } catch (err) {
      console.log(err.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const submitHandler = () => {
    const userData = {
      thumbnail,
      discount,
      category,
      instagram,
      messanger,
      contact,
      about,
      video: video.length > 0 ? video : portfolio?.video,
      images: images,
      _id: portfolio?._id ? portfolio?._id : "",
    };
    dispatch(
      doUpdateSupplier(
        userData,
        Toast,
        setSubmitLoading,
        data,
        "Portfolio editing"
      )
    );
  };

  const uploadImage = async (image, type) => {
    const formData = new FormData();
    const imgFile = image.target.files[0];
    formData.append("file", imgFile);
    formData.append("upload_preset", "fcgkldiv");
    try {
      setSubmitLoading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dvh4xep2n/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const json = await res.json();
      const data = json;
      if (type == "single") {
        setThumbnail(data?.secure_url);
      } else {
        setImages([...images, data?.secure_url]);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setSubmitLoading(false);
    }
  };
  const ctaCustomCategory = () => {
    setCategory([...category, customCtg]);
  };
  const imgDeleteHandler = (index, type) => {
    if (type == "single") {
      setThumbnail("");
    } else {
      const arr = images?.filter((item, i) => {
        if (index != i) {
          return item;
        }
      });
      setImages(arr);
    }
  };
  return [
    {
      loading,
      video,
      uploadVideo,
      category,
      setCategory,
      instagram,
      setInstagram,
      messanger,
      setMessanger,
      discount,
      setDiscount,
      about,
      setAbout,
      contact,
      setContact,
      submitHandler,
      submitLoading,
      images,
      uploadImage,
      imgDeleteHandler,
      thumbnail,
      setThumbnail,
      customCtg,
      setCustomCtg,
      ctaCustomCategory,
    },
  ];
}
