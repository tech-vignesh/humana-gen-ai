import React from "react";
import ChatBox from "../chat/ChatBox";
import Details from "../member/Details";
import ChatWindow from '../window/ChatWindow'
import Header from "../../shared/header/Header";
import { AppBox } from "../../styledComponents/CommonStyles";
import { LOGO_SRC } from "../../assets/appConstants/applicationConstants";
import { Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <AppBox>
      <Header logoSrc={LOGO_SRC} />
      <Grid container spacing={3}>
        <Grid item sx={{ height: "100%", width: "100%" }}>
          <ChatWindow/>
        </Grid>
      </Grid>
    </AppBox>
  );
};

export default Dashboard;
