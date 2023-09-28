import React from "react";
import UseProductDetail from "./UseProductDetail";
import "./ProductDetail.css";
import { Box } from "@mui/material";
import moment from "moment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PROFILE from "../../assets/profile.png";
import { useEffect } from "react";

export default function ProductDetail() {
  const { productDetail, navigateHandler, currentUserId, unFvrtHandler } =
    UseProductDetail();
  const user = productDetail?.userId;

  return (
    <>
      <div className="detail-page-wrapper">
        <div className="detail-page-right">
          <div className="detail-page-img">
            <img src={productDetail?.img} className="detail-page-img" />
          </div>

          <div className="detail-page-content">
            <div>
              <span className="detail-title">{productDetail?.title}</span>
              <br />
              <span className="detail-title">Rs.{productDetail?.price}</span>
              <br />
              <span>{productDetail?.brand}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <br />
              <small>{productDetail?.category}</small>
              <small>{productDetail?.phone}</small>
              <small>
                {moment(productDetail?.createdAt).format("MMMM DD YYYY")}
              </small>
            </div>
          </div>
          {/* description  */}
          <div className="detail-page-desc">
            <span className="detail-title">Description</span>
            <br />
            <span>{productDetail?.description}</span>
          </div>
        </div>
      </div>
    </>
  );
}
