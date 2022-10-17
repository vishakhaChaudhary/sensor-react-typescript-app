/* import packages */
import React from "react";
import { AccountCircleRounded } from "@mui/icons-material";
import {IconButton, Toolbar } from "@mui/material";
/* import style */
import { AppBar } from "./header.style";
/*import constant */
import { cms } from '../../constant/constant';

const Header = (props: any) => {
  const { open } = props;

  return (
      <AppBar position="static" open={open}>
        <Toolbar>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
              sx={{ flexGrow: 1 }}
              style={{justifyContent: 'flex-end'}}
            >
              <p
                style={{
                  color: "black",
                  fontSize: "x-small",
                  marginRight: "5px",
                  marginBottom: "12px",
                }}
              >
                {cms.user}
              </p>
              <AccountCircleRounded style={{ color: "black" }} />
            </IconButton>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
