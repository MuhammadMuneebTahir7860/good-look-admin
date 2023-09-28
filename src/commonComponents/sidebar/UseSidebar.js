import React from "react";
import { useDispatch } from "react-redux";
import { doLogout } from "../../redux/actions/AuthActions";
import Toast from "../../commonComponents/toast/Toast";
import UseWindowDimensions from "../../customHooks/UseWindowDimensions";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
export const UseSidebar = () => {
  const dispatch = useDispatch();
  const { width } = UseWindowDimensions();
  const [mobileOpen, setMobileOpen] = React.useState(
    width > 900 ? true : false
  );

  const menuItems = [
    {
      text: "Users",
      icon: <AccountCircleIcon />,
      path: "/",
    },
   
    
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logoutHandler = () => {
    dispatch(doLogout(Toast));
    handleDrawerToggle();
  };

  return [
    {
      mobileOpen,
      handleDrawerToggle,
      menuItems,
      logoutHandler,
    },
  ];
};
