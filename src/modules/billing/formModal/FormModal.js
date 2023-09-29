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
            <FormControl sx={{ marginTop: 2 }} fullWidth>
              <InputLabel htmlFor="dropdown">ایک اختیار منتخب کریں:</InputLabel>
              <Select
                label="ایک اختیار منتخب کریں"
                id="dropdown"
                value={billingData.suitType}
                onChange={(e) =>
                  setBillingData({ ...billingData, suitType: e.target.value })
                }
              >
                <MenuItem value="سادہ سوٹ">سادہ سوٹ</MenuItem>
                <MenuItem value="کمیز">کمیز</MenuItem>
                <MenuItem value="شلوار">شلوار</MenuItem>
                <MenuItem value="شرٹ">شرٹ</MenuItem>
                <MenuItem value="سفاری سوٹ">سفاری سوٹ</MenuItem>
                <MenuItem value="پینٹ کوٹ">پینٹ کوٹ</MenuItem>
                <MenuItem value="واسکوٹ">واسکوٹ</MenuItem>
                <MenuItem value="کانٹا">کانٹا</MenuItem>
              </Select>
            </FormControl>
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"مقدار"}
              name={"مقدار"}
              type={"number"}
              required
              fullWidth
              variant="standard"
              value={billingData.quantity}
              onChange={(e) =>
                setBillingData({ ...billingData, quantity: e.target.value })
              }
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"قیمت"}
              name={"قیمت"}
              type={"number"}
              required
              fullWidth
              variant="standard"
              value={billingData.price}
              onChange={(e) =>
                setBillingData({ ...billingData, price: e.target.value })
              }
            />
            <FM.FormButton
              style={{ backgroundColor: "#DEB18A" }}
              type="submit"
              variant="outlined"
              onClick={handleAddBilling}
            >
              Add More
            </FM.FormButton>
            {billings?.map((billing, index) => (
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
                    Suit Type: {billing.suitType}, Quantity: {billing.quantity},
                    Price: {billing.price}
                  </span>
                </div>
                <div
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => handleDeleteBilling(index)}
                >
                  <DeleteIcon />
                </div>
              </li>
            ))}
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
