import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import UseEditForm from "./UseEditForm";
export default function EditForm() {
  const {
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
  } = UseEditForm();
  return (
    <div>
      {/* <OverlayLoader open={loading} /> */}
      <Paper
        elevation={5}
        style={{
          height: "100vh",
          borderRadius: "30px",
          marginTop: "5%",
        }}
      >
        <h1 style={{ padding: "10px", textAlign: "center", color: "tomato" }}>
          Edit Products
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "30px" }}>
            <input type="file" onChange={uploadImageHandler} />
          </div>
          <div style={{ marginTop: "40px" }}>
            <TextField
              placeholder="Title"
              variant="standard"
              style={{ marginTop: "10px" }}
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              placeholder="No. of Bedrooms,Washroom,Drawing Room,etc."
              variant="standard"
              style={{ marginTop: "10px" }}
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div>
              <TextField
                placeholder="Price"
                variant="standard"
                // style={{ marginTop: "15px" }}
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                placeholder="Brand"
                variant="standard"
                // style={{ marginTop: "15px" }}
                fullWidth
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Vehicles">Vehicles</MenuItem>
                  <MenuItem value="Electronics">Electronics</MenuItem>
                  <MenuItem value="Rear Estate">Real Estate</MenuItem>
                  <MenuItem value="Jobs">Jobs</MenuItem>
                  <MenuItem value="Services">Services</MenuItem>
                  <MenuItem value="Mobile phone">Mobile Phone</MenuItem>
                  <MenuItem value="Land & Plots">Land & Plost</MenuItem>
                  <MenuItem value="Animals">Animals</MenuItem>
                  <MenuItem value="MotorCycles">MotorCycles</MenuItem>
                  <MenuItem value="Tablets">Tablets</MenuItem>
                  <MenuItem value="TV/Media">TV/Media</MenuItem>
                  <MenuItem value="Computer Accessories">
                    Computer Accessories
                  </MenuItem>
                  <MenuItem value="Home Appliances">Home Appliances</MenuItem>
                  <MenuItem value="Watches">Watches</MenuItem>
                  <MenuItem value="Jewellery">Jewellery</MenuItem>
                  <MenuItem value="Cars">Cars</MenuItem>C
                </Select>
              </FormControl>
            </div>
            <FormControl variant="standard" sx={{ minWidth: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Location
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Faisalabad">Faisalabad</MenuItem>
                <MenuItem value="Lahore">Lahore</MenuItem>
                <MenuItem value="karachi">karachi</MenuItem>
                <MenuItem value="Gujrat">Gujrat</MenuItem>
                <MenuItem value="Islamabad">Islamabad</MenuItem>
                <MenuItem value="Hydrabad">Hydrabad</MenuItem>
                <MenuItem value="Panjab">Panjab</MenuItem>
                <MenuItem value="Gujranwala">Gujranwala</MenuItem>
                <MenuItem value="Peshawar">Peshawar</MenuItem>
                <MenuItem value="Sindh">Sindh</MenuItem>
              </Select>
            </FormControl>
            <TextField
              placeholder="Phone Number"
              variant="standard"
              style={{ marginTop: "10px" }}
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            color="inherit"
            style={{
              marginTop: "30px",
              backgroundColor: " tomato",
              color: "white",
              paddingLeft: 30,
              paddingRight: 30,
            }}
            onClick={ctaUpdateHandler}
          >
            Update
          </Button>
        </div>
      </Paper>
    </div>
  );
}
