import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid,
    Paper,
  } from "@mui/material";

const MessageBox = ({message}) => {
    
  const isUser = message.sender === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 2,
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          backgroundColor: isUser ? "#a3b18a" : "primary.light",
          borderRadius: isUser ? "20px 20px 5px 20px" : "20px 20px 20px 5px",
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
      </Paper>
    </Box>
  );
};
  
  export default MessageBox;