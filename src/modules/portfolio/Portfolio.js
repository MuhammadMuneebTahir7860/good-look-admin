import { Container } from "@mui/material";
import React, { useState } from "react";
import { PFS } from "./PortfolioStyle";
import UsePortfolio from "./UsePortfolio";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "@mui/material/Button";
import OverlayLoader from "../../commonComponents/overlayLoader/OverlayLoader";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import VideocamIcon from "@mui/icons-material/Videocam";
import CommonTableLoader from "../../commonComponents/commonTableLoader/CommonTableLoader";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const categories = [
  "Photography",
  "Videography",
  "HMUA",
  "Host",
  "Sounds & Lights",
  "Events Place/Design",
  "Catering",
  "Singer/Band",
  "Coordinator",
  "Other",
];
export default function Portfolio() {
  const [
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
  ] = UsePortfolio();
  if (loading) {
    return <CommonTableLoader />;
  }
  return (
    <Container maxWidth="sm">
      <OverlayLoader open={submitLoading} />
      {images?.map((item, index) => {
        return (
          <PFS.ImageUploaderBtn
            sx={{ marginRight: 2, marginBottom: 2 }}
            img={item}
          >
            <IconButton
              sx={{ marginTop: -18, marginRight: -17 }}
              color="default"
            >
              <RemoveCircleIcon onClick={() => imgDeleteHandler(index)} />
            </IconButton>
          </PFS.ImageUploaderBtn>
        );
      })}
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input
          onChange={(e) => uploadImage(e)}
          hidden
          accept="image/*"
          type="file"
        />
        Upload picture
        <PhotoCamera sx={{ width: 50, height: 50 }} />
      </IconButton>
      <br />
      <br />
      <Button variant="contained" onClick={submitHandler}>
        Save
      </Button>
    </Container>
  );
}
