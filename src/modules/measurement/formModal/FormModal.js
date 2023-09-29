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
import DeleteIcon from "@mui/icons-material/Delete";

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
  address,
  setAddress,
  email,
  setEmail,
  submitLoading,
  blogTitle,
  description,
  setDescription,
  setBlogTitle,
  addBlogHandler,
  isEdit,
  setIsEdit,
  billingData,
  setBillingData,
  handleAddBilling,
  billings,
  setBillings,
  userData,
  setUserData,
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
  const handleDeleteBilling = (index) => {
    const updatedBillings = [...billings];
    updatedBillings.splice(index, 1);
    setBillings(updatedBillings);
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
          {state.modalUpdateFlag ? "Edit" : "Add"}
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
              label={"صارف کا نام"}
              name={"صارف کا نام"}
              type={"text"}
              required
              fullWidth
              variant="standard"
              value={userData.userName}
              onChange={(e) =>
                setUserData({ ...userData, userName: e.target.value })
              }
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"یوزر آئی ڈی نمبر"}
              name={"یوزر آئی ڈی نمبر"}
              type={"text"}
              required
              fullWidth
              variant="standard"
              value={userData.userId}
              onChange={(e) =>
                setUserData({ ...userData, userId: e.target.value })
              }
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"صارف نمبر"}
              name={"صارف نمبر"}
              type={"text"}
              required
              fullWidth
              variant="standard"
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"صارف کا پتہ"}
              name={"صارف کا پتہ"}
              type={"text"}
              required
              fullWidth
              variant="standard"
              value={userData.address}
              onChange={(e) =>
                setUserData({ ...userData, address: e.target.value })
              }
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"قمیض لمبائی"}
              name={"قمیض لمبائی"}
              type={"text"}
              required
              fullWidth
              variant="standard"
              value={billingData.kameezLength}
              onChange={(e) =>
                setBillingData({ ...billingData, kameezLength: e.target.value })
              }
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"بازو"}
              name={"بازو"}
              type={"text"}
              required
              fullWidth
              variant="standard"
              value={billingData.arms}
              onChange={(e) =>
                setBillingData({ ...billingData, arms: e.target.value })
              }
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"ٹیرا"}
              name={"ٹیرا"}
              type={"text"}
              required
              fullWidth
              variant="standard"
              value={billingData.teera}
              onChange={(e) =>
                setBillingData({ ...billingData, teera: e.target.value })
              }
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"کالر"}
              name={"کالر"}
              type={"text"}
              required
              fullWidth
              variant="standard"
              value={billingData.Kalar}
              onChange={(e) =>
                setBillingData({ ...billingData, Kalar: e.target.value })
              }
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"گھیرا"}
              name={"گھیرا"}
              type={"text"}
              required
              fullWidth
              variant="standard"
              value={billingData.gheera}
              onChange={(e) =>
                setBillingData({ ...billingData, gheera: e.target.value })
              }
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"سینہ"}
              name={"سینہ"}
              type={"text"}
              required
              fullWidth
              variant="standard"
              value={billingData.chest}
              onChange={(e) =>
                setBillingData({ ...billingData, chest: e.target.value })
              }
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"کمر"}
              name={"کمر"}
              type={"text"}
              required
              fullWidth
              variant="standard"
              value={billingData.waist}
              onChange={(e) =>
                setBillingData({ ...billingData, waist: e.target.value })
              }
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
            {state.modalUpdateFlag ? (
              <FM.FormButton
                style={{ backgroundColor: "#DEB18A" }}
                type="submit"
                variant="outlined"
                onClick={() => ctaUpdateHandler(handleCloseUpdate)}
              >
                Update
              </FM.FormButton>
            ) : (
              <FM.FormButton
                style={{ backgroundColor: "#DEB18A" }}
                type="submit"
                variant="outlined"
                onClick={() => addBlogHandler(handleCloseUpdate)}
              >
                Submit
              </FM.FormButton>
            )}
            {/* {isEdit ? (
              <>
                
              </>
            ) : (
              <>
               
              </>
            )} */}
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
}
