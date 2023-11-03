import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import "./ChatWindow.css";
import Communications from "../communications/Communication";
import ChatBox from "../chat/ChatBox";
import Details from "../member/Details";
const ChatWindow = () => {
  return (
    <Box>
      <Communications />
      <Details />
    </Box>
  );
};

export default ChatWindow;
