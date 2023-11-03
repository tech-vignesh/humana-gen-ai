import React from "react";
import { HeaderContainer } from "../../styledComponents/CommonStyles";
import { AppBar, Toolbar, Typography, Grid, Button } from "@mui/material";

const Header = ({ logoSrc }) => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <img src={logoSrc} alt="Logo" style={{ height: "40px", width: "auto", marginRight: "10px" }} />
        <Grid container justifyContent="flex-end" alignItems="center">
          <Button style={{ backgroundColor: '#af0061', color: 'white', borderRadius: '20px' , marginRight: '20px'}} variant="contained">Dashboard Settings</Button>
          <Button style={{ backgroundColor: '#af0061', color: 'white', borderRadius: '20px' }} variant="contained">Sign Out</Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
