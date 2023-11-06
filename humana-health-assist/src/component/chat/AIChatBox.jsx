import "./AIChatBox.css";
import React, { useState, useEffect, useContext } from "react";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { ButtonContainer } from "../../styledComponents/StyledChatComponents";
import Tooltip from "@mui/material/Tooltip";
import MessageBox from "./MessageBox";

const AIChatBox = () => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);

  const addToMessageList = (val) => {
    setMessages([...messages,val]);
  } 
  const sendMessage = (e) => {
    e.preventDefault();
    if (messageInput != '') {
      const time = '';
      addToMessageList({
        content: messageInput,
        createdDateTime: new Date(),
        sender: 'USER',
      });
      setMessageInput('');
    }
    // setCopiedBotResponse('');
  };

  const handleEnterClick = (e) => {
    if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

//   const handleSend = () => {
//     if (input.trim() !== "") {
//       setMessages([...messages, { text: input, sender: "user" }]);
//       setInput("");
//     }
//   };

  return (
    <div className="mainDiv">
      <div className="secondDiv">
        <MessageBox messageList = {messages} />
      </div>
      <div className="inputdiv">
        <input
          type="text"
          placeholder="Type your message here..."
          onChange={(e) => setMessageInput(e.target.value)}
          value={messageInput}
          onKeyDown={handleEnterClick}
          style={{
            backgroundColor: "#f2f2f2",
            border: "none",
            padding: "8px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            width: "100%",
            height: "50%",
            fontSize: "11px",
            fontFamily: "Inter-SemiBold",
            outline: "none",
            position: "static",
            borderBottom: "none",
            minWidth: "fit-content",
            wordBreak: "break-word",
            overflowX: "scroll",
            scrollBehavior: "smooth",
          }}
        />
        <ButtonContainer
          sx={{ borderBottomRightRadius: "5px", borderBottomLeftRadius: "5px" }}
        >
          <div>
            <Tooltip title="Attach Files" enterDelay={1000}>
              <IconButton
                sx={{
                  backgroundColor: "#ddddfe",
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: "#4f4fc6",
                  },
                  height: "16px",
                  width: "16px",
                }}
              >
                <AttachFileIcon
                  sx={{
                    color: "#20208D",
                    fontSize: "small",
                    fontFamily: "Inter-Regular",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Emoji" enterDelay={1000}>
              <IconButton
                sx={{
                  backgroundColor: "#ddddfe",
                  borderRadius: "50%",
                  marginLeft: "5px",
                  "&:hover": {
                    backgroundColor: "#4f4fc6",
                  },
                  height: "16px",
                  width: "16px",
                }}
              >
                <InsertEmoticonIcon
                  sx={{
                    color: "#20208D",
                    fontSize: "small",
                    fontFamily: "Inter-Regular",
                  }}
                />
              </IconButton>
            </Tooltip>
          </div>
          <Tooltip title="Send" enterDelay={1000}>
            <IconButton
              sx={{
                backgroundColor: "#4F4FC6",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "#ddddfe",
                },
                width: "40px",
                height: "16px",
              }}
              onClick={(e) => sendMessage(e)}
            >
              <SendIcon
                sx={{
                  color: "white",
                  fontSize: "8px",
                  fontFamily: "Inter-Regular",
                }}
              />
            </IconButton>
          </Tooltip>
        </ButtonContainer>
      </div>
    </div>
  );
};

export default AIChatBox;