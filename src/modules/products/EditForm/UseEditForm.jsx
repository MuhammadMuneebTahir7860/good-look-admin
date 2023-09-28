import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { doUpdateProduct } from "../../../redux/actions/ProductActions";

export default function UseEditForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.AuthReducer.user._id);
  useEffect(() => {
    setUserId(user);
  }, []);
  const locationHook = useLocation();
  const { state } = locationHook;
  const navigate = useNavigate()
  useEffect(() => {
    if (state) {
      setTitle(state.title);
      setDescription(state.description);
      setPhone(state.phone);
      setPrice(state.price);
      setCategory(state.category);
      setBrand(state.brand);
      setLocation(state.location);
      setUserId(state.userId);
      setImg(state.img);
      setFlag(true);
    }
  }, []);

  const uploadImageHandler = async () => {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
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

      setImg(data?.secure_url);
      console.log(data?.secure_url);
      // console.log(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const ctaSubmitHandler = () => {
    if (!title) {
      toast.error("Please Enter Title");
    } else if (!description) {
      toast.error("Please Enter Description");
    } else if (!price) {
      toast.error("Please Enter Price");
    } else if (!brand) {
      toast.error("Please Enter Brand");
    } else if (!category) {
      toast.error("Please Choose Category");
    } else if (!location) {
      toast.error("Please Choose Category");
    } else if (!phone) {
      toast.error("Please Enter Phone Number");
    } else if (!img) {
      toast.error("please Select an Image");
    } else {
      const data = {
        title: title,
        description: description,
        price: price,
        brand: brand,
        category: category,
        location: location,
        img: img || "",
        phone: phone,
        userId: userId,
      };
      //   dispatch(addProduct({ data, setLoading }));
    }
  };
  const ctaUpdateHandler = () => {
    if (!title) {
      toast.error("Please Enter Title");
    } else if (!description) {
      toast.error("Please Enter Description");
    } else if (!price) {
      toast.error("Please Enter Price");
    } else if (!brand) {
      toast.error("Please Enter Brand");
    } else if (!category) {
      toast.error("Please Choose Category");
    } else if (!location) {
      toast.error("Please Choose Category");
    } else if (!phone) {
      toast.error("Please Enter Phone Number");
    } else if (!img) {
      toast.error("please Select an Image");
    } else {
      const data = {
        _id: state._id,
        title: title,
        description: description,
        price: price,
        brand: brand,
        category: category,
        location: location,
        img: img || "",
        phone: phone,
        userId: userId,
      };
      console.log(data, "data");
      dispatch(doUpdateProduct(data, setLoading,navigate));
      setFlag(false);
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    brand,
    setBrand,
    category,
    setCategory,
    location,
    setLocation,
    img,
    setImg,
    phone,
    setPhone,
    ctaSubmitHandler,
    uploadImageHandler,
    loading,
    ctaUpdateHandler,
    flag,
  };
}
