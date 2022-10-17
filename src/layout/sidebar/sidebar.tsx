/*import packages */
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
/* import style */
import { Drawer, DrawerHeader } from "./sidebar.style";
/* import sideNavbar list */
import { sideNavbar } from "./sidenav";

const SideBar = (props: any) => {
  const { open, setOpen } = props;

  const renderListItem = () => {
    return sideNavbar.map((item) => (
      <NavLink
        to={item.path}
        style={{ textDecoration: "none", color: "rgb(117, 117, 117)" }}
        key={item.id}
      >
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </NavLink>
    ));
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={() => setOpen(!open)}>
          <Menu />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>{renderListItem()}</List>
    </Drawer>
  );
};

export default SideBar;
