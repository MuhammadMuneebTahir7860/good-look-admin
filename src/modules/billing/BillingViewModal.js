import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

export default function BillingViewModal({
  openModal,
  handleCloseModal,
  viewData,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        fullScreen={fullScreen}
        fullWidth={true}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(8px)",
          },
        }}
      >
        <DialogTitle>
          Details
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box>
            <Grid container sx={{ marginBottom: 2 }} spacing={2}>
              <Grid sx={{ fontWeight: "bold" }} item xs={6}>
                User Name:
              </Grid>
              <Grid align="right" item xs={6}>
                {viewData?.userData?.userName}
              </Grid>
            </Grid>
            <Grid sx={{ marginBottom: 2 }} container spacing={2}>
              <Grid sx={{ fontWeight: "bold" }} item xs={6}>
                User Id:
              </Grid>
              <Grid align="right" item xs={6}>
                {viewData?.userData?.userId}
              </Grid>
            </Grid>
            <Grid sx={{ marginBottom: 2 }} container spacing={2}>
              <Grid sx={{ fontWeight: "bold" }} item xs={6}>
                User Phone:
              </Grid>
              <Grid align="right" item xs={6}>
                {viewData?.userData?.phone}
              </Grid>
            </Grid>
            <Grid sx={{ marginBottom: 2 }} container spacing={2}>
              <Grid sx={{ fontWeight: "bold" }} item xs={6}>
                User address:
              </Grid>
              <Grid align="right" item xs={6}>
                {viewData?.userData?.address}
              </Grid>
            </Grid>
            <Grid sx={{ marginBottom: 2 }} container spacing={2}>
              <Grid sx={{ fontWeight: "bold" }} item xs={6}>
                Billings:
              </Grid>
              <Grid align="right" item xs={6}>
                {viewData?.billings?.map((billing, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span>
                        Suit Type: {billing?.suitType}, Quantity:{" "}
                        {billing?.quantity}, Price: {billing?.price}
                      </span>
                    </div>
                  </li>
                ))}
              </Grid>
            </Grid>
            <Grid sx={{ marginBottom: 2 }} container spacing={2}>
              <Grid sx={{ fontWeight: "bold" }} item xs={6}>
                Total Price:
              </Grid>
              <Grid align="right" item xs={6}>
                {viewData?.billings
                  .map((billing) => Number(billing?.price))
                  .reduce((acc, price) => acc + price, 0)
                  ?.toString()}
              </Grid>
            </Grid>
            <Grid sx={{ marginBottom: 2 }} container spacing={2}>
              <Grid sx={{ fontWeight: "bold" }} item xs={6}>
                CreatedAt:
              </Grid>
              <Grid align="right" item xs={6}>
                {new Date(viewData?.createdAt)?.toLocaleDateString()}
              </Grid>
            </Grid>
            <Grid sx={{ marginBottom: 2 }} container spacing={2}>
              <Grid item xs={12}>
                <img width={"100%"} src={viewData?.img} />
              </Grid>
            </Grid>
          </Box>
          <br />
        </DialogContent>
      </Dialog>
    </div>
  );
}
