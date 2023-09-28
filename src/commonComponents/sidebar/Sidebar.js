import React, { useState } from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import { UseSidebar } from "./UseSidebar";
import { SidebarStyle } from "./SidebarStyle";
import { Divider } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import UseWindowDimensions from "../../customHooks/UseWindowDimensions";
import { Hidden } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import logo from "../../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { colors } from "../../constants/Color";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import BookIcon from '@mui/icons-material/Book';
import EventIcon from '@mui/icons-material/Event';
import StraightenIcon from '@mui/icons-material/Straighten';
import ReceiptIcon from '@mui/icons-material/Receipt';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CalculateIcon from '@mui/icons-material/Calculate';
const drawerWidth = 276;
function Sidebar(props) {
  const [{ mobileOpen, handleDrawerToggle, menuItems, logoutHandler }] =
    UseSidebar();

  const { width } = UseWindowDimensions();
  const { window } = props;
  const location = useLocation();
  const anchorRef = React.useRef(null);
  const [hover, setHover] = useState({ hover: false, index: "" });
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const sidebarData = [
    {
      text: "Dashboard",
      icon: <QueryStatsIcon />,
      path: "/customers",
    },
    {
      text: "Services",
      icon: <DryCleaningIcon />,
      path: "/services",
    },

    {
      text: "Portfolio",
      icon: <PersonPinIcon />,
      path: "/order",
    },
    {
      text: "Appointment Booking",
      icon: <BookOnlineIcon />,
      path: "/payment",
    },
    {
      text: "Blogs",
      icon: <BookIcon />,
      path: "/blogs",
    },
    {
      text: "Users",
      icon: <AccountCircleIcon />,
      path: "/customers",
    },
    {
      text: "Schedule",
      icon: <EventIcon />,
      path: "/customers",
    },
    {
      text: "Measuremengt",
      icon: <StraightenIcon />,
      path: "/customers",
    },
    {
      text: "Billing",
      icon: <ReceiptIcon />,
      path: "/customers",
    },

    {
      text: "Join us requests",
      icon: <JoinFullIcon />,
      path: "/customers",
    },
    {
      text: "Workers",
      icon: <EngineeringIcon />,
      path: "/customers",
    },
    {
      text: "Profit Calculator",
      icon: <CalculateIcon />,
      path: "/customers",
    },
  ];
  //List Item

  const renderSidebarItems = (items, index) => {
    return (
      <>
        <SidebarStyle.DomLink to={items?.path} key={index}>
          <SidebarStyle.ListItem
            key={index}
            ref={anchorRef}
            onClick={width < 900 ? handleDrawerToggle : null}
            Active={location?.pathname === items?.path}
            onMouseOver={() => setHover({ hover: true, index: index })}
            onMouseOut={() => setHover({ hover: false, index: "" })}
            sx={
              location?.pathname === items?.path
                ? { backgroundColor: "#DEB18A", borderRadius: 2 }
                : null
            }
          >
            <SidebarStyle.ListItemIconTag
              hover={hover}
              index={index}
              Active={location?.pathname === items?.path}
            >
              {items?.icon}
            </SidebarStyle.ListItemIconTag>
            <SidebarStyle.ListItemTextTag
              Active={location?.pathname === items?.path}
              primary={items?.text}
            />
          </SidebarStyle.ListItem>
        </SidebarStyle.DomLink>
      </>
    );
  };
  //Sidebar Items
  const drawer = (
    <div>
      <List>
        <>
          {sidebarData?.map((items, index) => {
            return renderSidebarItems(items, index);
          })}
        </>
      </List>
    </div>
  );
  return (
    <SidebarStyle.Box>
      <CssBaseline />
      <SidebarStyle.AppBar elevation={0} position="fixed" open={mobileOpen}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <SidebarStyle.IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <MenuIcon style={{ color: colors.white }} />
          </SidebarStyle.IconButton>
        </Toolbar>
      </SidebarStyle.AppBar>

      <SidebarStyle.WebDrawer
        PaperProps={{
          sx: {
            background: colors.appBar,
            border: "1px solid white",
          },
        }}
        sx={{
          "& .MuiDrawer-paper": {
            border: `1px solid ${colors.white}`,
          },
        }}
        variant="permanent"
        container={container}
        open={mobileOpen}
      >
        <SidebarStyle.DrawerHeader>
          <SidebarStyle.Image src={logo} />
        </SidebarStyle.DrawerHeader>
        <Divider />
        {drawer}
        <SidebarStyle.LogoutLink onClick={logoutHandler}>
          Logout
        </SidebarStyle.LogoutLink>
      </SidebarStyle.WebDrawer>

      <Hidden mdUp>
        <SidebarStyle.MobileDrawer
          PaperProps={{
            sx: {
              background: colors.appBar,
              border: "1px solid white",
            },
          }}
          sx={{
            "& .MuiDrawer-paper": {
              border: `1px solid ${colors.white}`,
            },
          }}
          drawerWidth={drawerWidth}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Toolbar />
          {drawer}
          <SidebarStyle.LogoutLink onClick={logoutHandler}>
            Logout
          </SidebarStyle.LogoutLink>
        </SidebarStyle.MobileDrawer>
      </Hidden>

      <SidebarStyle.Main component="main" open={mobileOpen}>
        <SidebarStyle.DrawerHeader />
        {/* {props.children} */}
        <Outlet />
      </SidebarStyle.Main>
    </SidebarStyle.Box>
  );
}
Sidebar.propTypes = {
  window: PropTypes.func,
};
export default Sidebar;
