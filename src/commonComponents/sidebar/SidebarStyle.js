import { Box, Button, IconButton, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { colors } from "../../constants/Color";
import { Link } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
const drawerWidth = 276;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(0)} + 1px)`,
  },
});
export const SidebarStyle = {
  //Main Body
  Box: styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  })),
  //Appbar
  AppBar: styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    border: "none",
    backgroundColor: colors.appBar,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("md")]: {
      ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    },
  })),
  //Web Drawer
  WebDrawer: styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    border: "none",
    borderWidth: 0,
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })),
  //Mobile Drawer
  MobileDrawer: styled(MuiDrawer)(({ theme, drawerWidth }) => ({
    height: "100%",
    minHeight: "100vh",
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
  })),
  //IconButton
  IconButton: styled(IconButton)(({ theme }) => ({
    marginRight: 30,
    color: "#000",
  })),
  //Drawer + Image Wrapper
  DrawerHeader: styled("div")(({ theme }) => ({
    display: "flex",
    backgroundColor:colors.appBar,
    alignItems: "center",
    justifyContent: "center",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  })),
  //Image
  Image: styled("img")(({ theme }) => ({
    height: 50,
    width: 120,
    marginTop: 4,
    objectFit: "contain",
  })),
  //Childrens Render
  Main: styled("main")(({ theme }) => ({
    flexGrow: 1,
    overflowWrap: "break-word",
    backgroundColor:colors.appBar,
    minHeight: "100vh",
    height: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
    },
  })),
  // ===================== Sidebar Links =====================

  DomLink: styled(Link)(() => ({
    display: "flex",
    textDecoration: "none",
    marginLeft: 16,
    marginRight: 16,
    width: 244,
  })),
  ListItem: styled(ListItem)(({ Active }) => ({
    color: Active ? "#fff" : "#DEB18A",
    backgroundColor: Active ? "#DEB18A" : "transparent",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#DEB18A",
      color: "#fff",
      borderRadius: 8,
    },
  })),
  ListItemIconTag: styled(ListItemIcon)(({ Active, hover, index }) => ({
    color: Active
      ? "#fff"
      : hover.hover && hover.index == index
      ? "#fff"
      : "#DEB18A",
  })),
  ListItemTextTag: styled(ListItemText)(({ Active }) => ({
    // color: Active ? '#fff' : '#96A0B5',
    // marginLeft: -2,
    // '&:hover': {
    //   color: '#fff',
    // },
  })),
  ListItemTextTagForDropDown: styled(ListItemText)(() => ({
    color: colors.black + 90,
    marginLeft: -22,
  })),
  ListItemsContainerForSettings: styled("div")(({ theme }) => ({
    marginLeft: 20,
  })),
  TypoTraining: styled(Typography)(() => ({
    marginTop: "12px ",
    color: "#000",
    "@media (max-width:900px)": {
      marginTop: "0px",
      float: "left",
    },
  })),
  LogoutLink: styled(Button)(() => ({
    textDecoration: "none",
    color: "white",
    padding: "10px",
    borderRadius: 8,
    backgroundColor: "#DEB18A",
    textAlign: "center",
    transition: "0.5s",
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    height: 44,
    width: 244,
    "&:hover": {
      backgroundColor: "#DEB18A",
      color: "white",
    },
  })),
};
