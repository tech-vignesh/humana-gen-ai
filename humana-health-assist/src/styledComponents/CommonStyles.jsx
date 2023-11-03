import styled from "styled-components";
import { Tab, Paper, Box, Button } from "@mui/material";

export const AppBox = styled(Box)`
  width: 100%;
  height: 100%;
`;

export const HeaderButton = styled(Button)`
  background-color: #af0061;
  color: "white";
  border-radius: 20px;
  cursor: "pointer";
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px 20px;
`;

export const HealthCardSubTitle = styled.i`
  font-size: 10px !important;
  font-family: "Inter-Medium" !important;
`;

export const OtherCardsTitle = styled.div`
  font-size: 14px !important;
  font-family: Inter-Bold !important;
`;

export const DivContainer = styled.div`
  height: 100%;
`;

export const PaperContainer = styled(Paper)`
  height: 100%;
  overflow-y: auto;
  box-shadow: none !important;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #00000033;
    border-radius: 0px;
  }
`;
