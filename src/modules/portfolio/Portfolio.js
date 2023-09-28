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

      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={categories}
        disableCloseOnSelect
        // defaultValue={category}
        onChange={(e, value) => setCategory(value)}
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        style={{ width: "100%" }}
        sx={{ marginTop: 6, marginBottom: 2 }}
        renderInput={(params) => (
          <TextField
            fullWidth
            {...params}
            label="Services"
            placeholder="Services"
          />
        )}
      />
      <PFS.TextInput
        InputLabelProps={{ shrink: true }}
        InputProps={{ disableUnderline: true }}
        margin="dense"
        label={"Custom Category"}
        name={"CustomF Category"}
        type={"text"}
        required
        fullWidth
        variant="standard"
        value={customCtg}
        onChange={(e) => setCustomCtg(e.target.value)}
      />
      <Button variant="contained" onClick={ctaCustomCategory}>
        Add
      </Button>
      <PFS.TextInput
        InputLabelProps={{ shrink: true }}
        InputProps={{ disableUnderline: true }}
        margin="dense"
        label={"Instagram account"}
        name={"Instagram account"}
        type={"text"}
        required
        fullWidth
        variant="standard"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
      />
      <PFS.TextInput
        InputLabelProps={{ shrink: true }}
        InputProps={{ disableUnderline: true }}
        margin="dense"
        label={"Messanger"}
        name={"Messanger"}
        type={"text"}
        required
        fullWidth
        variant="standard"
        value={messanger}
        onChange={(e) => setMessanger(e.target.value)}
      />
      <PFS.TextInput
        InputLabelProps={{ shrink: true }}
        InputProps={{ disableUnderline: true }}
        margin="dense"
        label={"Contact number"}
        name={"Contact number"}
        type={"number"}
        required
        fullWidth
        variant="standard"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <PFS.LabelText>About me*</PFS.LabelText>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="About me"
        style={{ width: "100%", marginBottom: 20 }}
        minRows={3}
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />

      {video && (
        <video
          src={video}
          id="video"
          width="100%"
          height="100%"
          controls
        ></video>
      )}
      <PFS.VideoUploaderBtn variant="secondary" component="label">
        <IconButton
          color="default"
          aria-label="upload picture"
          component="label"
        >
          <input
            name="input_video"
            onChange={(e) => uploadVideo(e)}
            hidden
            accept="video/mp4, video/mov"
            type="file"
          />
          {video ? "Change vide" : "Upload video"}
          <VideocamIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </PFS.VideoUploaderBtn>
      <PFS.LabelText>Video thumbnail*</PFS.LabelText>
      {!thumbnail ? (
        <PFS.ImageUploaderBtn
          variant="secondary"
          img={thumbnail}
          component="label"
        >
          <IconButton
            color="default"
            aria-label="upload picture"
            component="label"
          >
            <input
              onChange={(e) => uploadImage(e, "single")}
              hidden
              accept="image/*"
              type="file"
            />
            <PhotoCamera sx={{ fontSize: 40 }} />
          </IconButton>
        </PFS.ImageUploaderBtn>
      ) : (
        <PFS.ImageUploaderBtn img={thumbnail}>
          <IconButton sx={{ marginTop: -18, marginRight: -17 }} color="default">
            <RemoveCircleIcon
              onClick={() => imgDeleteHandler(setThumbnail, "single")}
            />
          </IconButton>
        </PFS.ImageUploaderBtn>
      )}
      <br />
      <br />
      <br />
      <br />
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
      <br />
      <PFS.TextInput
        InputLabelProps={{ shrink: true }}
        InputProps={{ disableUnderline: true }}
        margin="dense"
        label={"Discount"}
        name={"Discount"}
        type={"number"}
        required
        fullWidth
        variant="standard"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />
      <Button variant="contained" onClick={submitHandler}>
        Save
      </Button>
    </Container>
  );
}
