import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./CommonCard.css";
import IMAGE from "../../assets/homeone.png";
import moment from "moment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
export default function CommonCard({
  item,
  addFvrtHandler,
  unFvrtHandler,
  navigateHandler,
  myAds,
  setOpen,
  onClickDeleteHandler,
  updateClickHandler,
  handleClickOpen
}) {
  return (
    <>
    
    <Box className="commonCard">
      <img
        src={item?.img || IMAGE}
        className="commonCard-img"
        onClick={() => navigateHandler(item?._id)}
      />
      <Box className="card-content">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span className="card-title">{item?.title}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <small style={{ fontWeight: "bold" }}>Rs.{item?.price}</small>
            <br />
            <span>{item?.location}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <span>{item?.brand}</span>
            <small>{moment(item?.createdAt).format("MMMM DD YYYY")}</small>
          </div>
        </div>

        <Box className="commonCard-btns">
          <button
            className="buy-now-btn"
            style={{ backgroundColor: "red" }}
            onClick={() => onClickDeleteHandler(item?._id)}
          >
            <DeleteIcon style={{ color: "white", cursor: "pointer" }} />
          </button>
          <button
            className="buy-now-btn"
            style={{ backgroundColor: "green" }}
            onClick={() => handleClickOpen(item)}
          >
            <EditIcon style={{ color: "white", cursor: "pointer" }} />
          </button>
        </Box>
      </Box>
    </Box>
    </>

  );
}
