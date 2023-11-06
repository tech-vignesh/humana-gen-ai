import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import "./ChatWindow.css";
import Communications from "../communications/Communication";
import AIChatBox from "../chat/AIChatBox";
import Details from "../member/Details";
const ChatWindow = () => {
  return (
    <Box>
      <Communications />
      <AIChatBox />
      <Details />
    </Box>
  );
};

export default ChatWindow;
