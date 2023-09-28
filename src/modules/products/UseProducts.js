import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import {
  doDeleteProduct,
  getAllProducts,
} from "../../redux/actions/ProductActions";

export default function UseProducts() {
  const allProducts = useSelector((store) => store.ProductReducer.allProducts);
  const [laoding, setLoading] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [viewData, setViewData] = useState([]);
  const [delModal, setDelModal] = useState(false);
  const [delId, setDelId] = useState("");
  const [paramId, setParamId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [flag, setFlag] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAllProducts(setLoading));
  }, []);
  useEffect(() => {
    const filterValue = allProducts?.filter((item) => item?.userId === id);
    setFilterProduct(filterValue);
  }, [filterProduct]);

  const navigateHandler = (id) => {
    navigate(`/product-detail/${id}`);
  };
  const onClickDeleteHandler = (id) => {
    setDelModal(true);
    setDelId(id);
  };

  const ctaDeleteHandler = () => {
    dispatch(doDeleteProduct(delId, setLoading));

    setDelModal(false);
  };
  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };
  const dataViewHandler = (row) => {
    handleCloseModal();
    setViewData(row);
  };
  const onClickEditHandler = (item) => {
    navigate("/editForm", { state: item });
  };

  return {
    laoding,
    allProducts,
    navigateHandler,
    data: filterProduct,
    onClickDeleteHandler,
    ctaDeleteHandler,
    delModal,
    setDelModal,
    openModal,
    setOpenModal,
    handleCloseModal,
    dataViewHandler,
    onClickEditHandler,
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
    userId,
    setUserId,
    phone,
    setPhone,
  };
}
