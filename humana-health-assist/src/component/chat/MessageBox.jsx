import React, { useEffect, useRef, MutableRefObject } from "react";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import "./MessageBox.css";
import Card from "@mui/material/Card";

const MessageBox = ({ props }) => {
  const messagesEndRef = useRef(null);

  console.log(props);
  // const scrollToBottom = () => {
  //   if (!messagesEndRef.current) return;
  //   if (messagesEndRef.current) {
  //     messagesEndRef?.current?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "end",
  //       inline: "nearest",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   if (props.messages.length > 0) {
  //     scrollToBottom();
  //   }
  // }, [props.messages]);

  // const isUser = message.sender === "user";

  return (
    <div className="message_list">
      {/* {props.messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
      <Card ref={messagesEndRef} /> */}
    </div>
    
    /*<Box
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
    </Box>*/

  );
};

export default MessageBox;
