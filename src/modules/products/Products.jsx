import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import IMG from "../../assets/not.png";
import "./Products.css";
// import Loader from "../../components/loader/Loader";
import UseProducts from "./UseProducts";
import CommonCard from "../../commonComponents/commonCard/CommonCard";
import TransitionsModal from "../../commonComponents/transitionsModal/TransitionsModal";
import CommonTableLoader from "../../commonComponents/commonTableLoader/CommonTableLoader";

export default function Products() {
  const {
    loading,
    navigateHandler,
    data,
    onClickDeleteHandler,
    ctaDeleteHandler,
    delModal,
    setDelModal,
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
  } = UseProducts();

  if (loading) {
    return <CommonTableLoader />;
  }
  return (
    <>
      <TransitionsModal
        sumbitHandler={ctaDeleteHandler}
        open={delModal}
        setOpen={setDelModal}
      />
      <div className="home-page-wrapper">
        <p className="home-page-heading">Products</p>
        <Divider />
        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <Grid container spacing={2}>
              {loading ? (
                <>
                  <CommonTableLoader />
                </>
              ) : data.length > 0 ? (
                <>
                  {data?.map((item) => {
                    return (
                      <>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                          <CommonCard
                            item={item}
                            navigateHandler={navigateHandler}
                            onClickDeleteHandler={onClickDeleteHandler}
                            handleClickOpen={onClickEditHandler}
                          />
                        </Grid>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={IMG} style={{ width: "50%" }} />
                  </Box>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
