import styled from "@emotion/styled";
import { Dialog, IconButton, TextField } from "@mui/material";
import { colors } from "../../../constants/Color";
import Button from "@mui/material/Button";

export const FM = {
  DialogBox: styled(Dialog)(() => ({
    width: 712,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  })),
  FormButton: styled("button")(() => ({
    color: `${colors.white}`,
    border: "none",
    borderRadius: 8,
    padding: "11px 25px 11px 25px",
    cursor: "pointer",
    fontWeight: "normal",
    letterSpacing: "0.5px",
    transition: "0.4s",
    backgroundColor: "rgba(30, 134, 255, 0.1)",
    marginTop: 10,
    marginBottom: 10,
  })),
  Image: styled("input")(() => ({
    backgroundColor: colors.appBar,
    color: "#ffffff",
    padding: "5px",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: colors.appBar,
      border: `1px solid ${colors.appBar}`,
    },
  })),
  IconButton: styled(IconButton)(({ theme }) => ({
    position: "absolute",
    right: 8,
    top: 8,
    color: (theme) => theme.palette.grey[500],
  })),
  TextInput: styled(TextField)(() => ({
    backgroundColor: colors.white,
    "& label": {
      transformOrigin: "left !important",
      left: "inherit !important",
      fontSize: "16px",
      color: `${colors.tomato}`,
      fontWeight: 500,
      overflow: "unset",
      fontFamily: "monospace",
    },
    "& input": {
      marginTop: 4,
      border: "1px solid #E5EBF0",
      borderRadius: 8,
      paddingLeft: 10,
      paddingRight: 10,
      height: 35,
      fontFamily: "monospace",
    },
  })),
  LabelText: styled("p")(({ theme }) => ({
    color: `${colors.tomato}`,

    fontSize: 14,
    fontFamily: "monospace",
  })),
  ImagesRow: styled("div")(({ theme }) => ({
    width: "100%",
    display: "inline-flex",
    flexWrap: "wrap",
  })),
  ImageUploaderBtn: styled(Button)(({ profileImg }) => ({
    backgroundColor: "#f5f5f5",
    height: 200,
    width: 200,
    backgroundImage: `url(${profileImg})`,
    backgroundSize: 200,
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundPosition: "50% 50%",
  })),
};
