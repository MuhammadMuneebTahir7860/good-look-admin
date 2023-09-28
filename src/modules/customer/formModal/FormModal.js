import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { AppContext } from "../../../State";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { FM } from "./FormModalStyle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { CircleSpinner } from "react-spinners-kit";
import OverlayLoader from "../../../commonComponents/overlayLoader/OverlayLoader";
export default function FormModal({
  ctaUpdateHandler,
  profileImg,
  uploadImage,
  loading,
  imgDeleteHandler,
  name,
  setName,
  contact,
  setContact,
  sellerName,
  setSellerName,
  productTitle,
  setProductTitle,
  submitLoading,
  sellerEmail,
  setSellerEmail,
  email,
  setEmail,
  paymentApproved,
  setPaymentApproved,
}) {
  const { state, dispatch } = useContext(AppContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCloseUpdate = () => {
    dispatch({
      type: "setModal",
      payload: {
        modalUpdateFlag: false,
        openFormModal: false,
      },
    });
  };

  return (
    <div>
      <OverlayLoader open={submitLoading} />
      <Dialog
        open={state.openFormModal}
        onClose={handleCloseUpdate}
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
          Edit
          <IconButton
            aria-label="close"
            onClick={handleCloseUpdate}
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
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"Name"}
              name={"Name"}
              type={"text"}
              required
              fullWidth
              value={name}
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"Email"}
              name={"title"}
              type={"text"}
              required
              fullWidth
              disabled
              value={email}
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"Product Title"}
              name={"title"}
              type={"text"}
              required
              disabled
              fullWidth
              value={productTitle}
              variant="standard"
              onChange={(e) => setProductTitle(e.target.value)}
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"Contact"}
              name={"Contact"}
              type={"text"}
              required
              fullWidth
              value={contact}
              variant="standard"
              onChange={(e) => setContact(e.target.value)}
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"Seller Name"}
              name={"Address"}
              type={"text"}
              required
              fullWidth
              disabled
              value={sellerName}
              variant="standard"
              onChange={(e) => setSellerName(e.target.value)}
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"Seller Email"}
              name={"title"}
              type={"text"}
              required
              fullWidth
              disabled
              value={sellerEmail}
              variant="standard"
              onChange={(e) => setSellerEmail(e.target.value)}
            />

            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"Payment Approved?"}
              name={"Payment approved"}
              type={"checkbox"}
              checked={paymentApproved}
              required
              style={{ width: 25 }}
              value={paymentApproved}
              variant="standard"
              onChange={(e) => setPaymentApproved(e.target.checked)}
            />
          </Box>
          <br />
        </DialogContent>
        <DialogActions>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            <FM.FormButton
              style={{ color: "#1E86FF" }}
              variant="outlined"
              onClick={handleCloseUpdate}
            >
              Cancel
            </FM.FormButton>
            <FM.FormButton
              style={{ backgroundColor: "tomato" }}
              type="submit"
              variant="outlined"
              onClick={() => ctaUpdateHandler(handleCloseUpdate)}
            >
              Update
            </FM.FormButton>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
}
