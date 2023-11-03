import React from 'react';
import { styled } from 'styled-components';
import { AppBar, Tab, Box, Card, TextField } from '@mui/material';

export const Item = styled('div')({
  backgroundColor: '#efefef',
  border: 'none',
  textAlign: 'center',
});

export const HeaderContainer = styled(AppBar)`
  background-color: #fff !important;
  color: #000 !important;
  height: 48px;
`;

export const TabPanels = styled(Tab)`
  min-width: auto; /* Adjust the width of the tab as needed */
  padding: 0.5rem 1rem; /* Add padding for spacing */
  border-radius: 5px 5px 0 0; /* Rounded corners for the top */
  background-color: white; /* Set background color */
  color: black; /* Set text color */
  margin: 0 0.1rem; /* Adjust horizontal spacing between tabs */
  border-bottom: 2px solid transparent; /* Add a border at the bottom */

  &.Mui-selected {
    background-color: white; /* Set background color for the selected tab */
    border-bottom-color: blue; /* Set border color for the selected tab */
  }
`;

export const titleStyle = {
  textAlign: 'left',
  fontSize: '20px',
  fontFamily: 'Inter-Black',
  fontWeight: 'bold',
};

export const iconStyle = {
  fontSize: '8px',
  fontFamily: 'Inter-Black',
  borderRadius: '50%',
  backgroundColor: '#DDDDFE',
  color: '#20208D',
  padding: '1px',
  marginLeft: '5px',
};

export const CustomerInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ChatBox = styled(Box)`
  display: flex;
  position: static;
  flex-direction: column;
`;

export const AgentBox = styled(Box)`
  display: flex;
  position: static;
  flex-direction: column;
  height: 100%;
`;

export const MessagesContainer = styled(Box)`
  display: flex !important;
  flex-direction: column;
  flex-grow: 1;
  min-height: 15rem;
  height:100%;
  position:static;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #00000033;
    border-radius: 4px;
  }
`;

export const AgentMessageBubble = styled(Card)`
  padding: 10px;
  margin: 10px;
  max-width: 70%;
  font-size: 10px;
  font-family: 'Inter-Black';
  align-self: flex-end !important;
  background-color: #ddddfe !important;
  justify-content: right !important;
  margin-left: 30%;
`;

export const CustomerMessageBubble = styled(Card)`
  padding: 10px;
  margin: 10px;
  max-width: 70%;
  font-size: 10px;
  font-family: 'Inter-Black';
  align-self: flex-start !important;
  background-color: #f9f9f9 !important;
  margin-right: 30%;
`;

export const InputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 10px;
  height: 30px;
  width: 100%;
  marginright: 10px;
  marginleft: 10px;
`;

export const MessageInput = styled(TextField)`
  flex-grow: 1;
  margin-right: 10px;
  background-color: #f2f2f2;
`;

export const Triangle = styled.div`
  position: absolute;
  top: 50%;
  left: -10px; /* Adjust the distance of the triangle from the left */
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #f9f9f9; /* Triangle color */
`;

export const ChatBubble = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  max-width: 80%;
  overflow-wrap: break-word;
  text-align: left;
`;

export const UserMessage = styled(ChatBubble)`
  background-color: #f9f9f9;
  color: black;
  font-size: 12px;
  font-family: 'Inter-Black';
  align-self: flex-start;
  margin-right: auto;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid;
    bottom: -8px;
    left: 8px;
    right: auto;
    border-top-color: #f9f9f9;
  }
`;

export const AgentMessage = styled(ChatBubble)`
  background-color: #ddddfe;
  color: black;
  font-size: 12px;
  font-family: 'Inter-Black';
  align-self: flex-end;
  margin-left: auto;
  margin-right: 8px;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid;
    bottom: -8px;
    left: auto;
    right: 8px;
    border-top-color: #ddddfe;
  }
`;

export const BoldText = styled.span`
  font-weight: bold;
  font-size: 12px;
  font-family: Inter-SemiBold;
`;

export const LeftAlignedText = styled.div`
  text-align: left;
  font-size: 11px;
  font-family: Inter-Medium;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
`;

export const MemberNameWrap = styled.div`
  text-align: left;
  margin-left: 80px;
  font-size: 12px;
`;
