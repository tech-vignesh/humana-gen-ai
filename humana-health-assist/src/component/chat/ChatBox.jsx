import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageBox from "./MessageBox";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.200",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message, index) => (
          <MessageBox key={index} message={message} />
        ))}
      </Box>
      <Box
        sx={{
          p: 2,
          backgroundColor: "#dad7cd",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder="Type a message"
          style={{ backgroundColor: "white", borderBlockColor: "#dad7cd" }}
          value={input}
          onChange={handleInputChange}
        />
        <Button
          size="medium"
          variant="contained"
          color="success"
          style={{ marginLeft: "10px", borderRadius: "20px" }}
          endIcon={<SendIcon />}
          onClick={handleSend}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBox;
