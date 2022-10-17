import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "./header";
import SideBar from "./sidebar";

const Layout = (props: any) => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        {props.children}
      </div>
    </Box>
  );
};

export default withRouter(Layout);
