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
  address,
  setAddress,
  email,
  setEmail,
  submitLoading,
  serviceTitle,
  description,
  setDescription,
  setTitle,
  addBlogHandler,
  isEdit,
  setIsEdit,
  price,
  setPrice
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
              label={"Name"}
              name={"Name"}
              type={"text"}
              required
              fullWidth
              value={serviceTitle}
              variant="standard"
              onChange={(e) => setTitle(e.target.value)}
            />
            <FM.TextInput
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              margin="dense"
              label={"Work Title"}
              name={"Work Title"}
              type={"text"}
              required
              fullWidth
              value={description}
              variant="standard"
              onChange={(e) => setDescription(e.target.value)}
            />

            <FM.LabelText>picture*</FM.LabelText>
            {loading ? (
              <FM.ImageUploaderBtn>
                <CircleSpinner color="#0D4cb5" height={50} width={50} />
              </FM.ImageUploaderBtn>
            ) : !profileImg ? (
              <FM.ImageUploaderBtn
                variant="secondary"
                profileImg={profileImg}
                component="label"
              >
                <IconButton
                  color="default"
                  aria-label="upload picture"
                  component="label"
                >
                  <input
                    onChange={(e) => uploadImage(e)}
                    hidden
                    accept="image/*"
                    type="file"
                  />
                  <PhotoCamera sx={{ fontSize: 40 }} />
                </IconButton>
              </FM.ImageUploaderBtn>
            ) : (
              <FM.ImageUploaderBtn profileImg={profileImg}>
                <IconButton
                  sx={{ marginTop: -18, marginRight: -17 }}
                  color="default"
                >
                  <RemoveCircleIcon onClick={() => imgDeleteHandler()} />
                </IconButton>
              </FM.ImageUploaderBtn>
            )}
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
