import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = ({ logoSrc }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <img src={logoSrc} alt="Logo" style={{ height: "40px", width: "auto", marginRight: "10px" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
