import styled from 'styled-components';
import { Tab, Typography } from '@mui/material';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: 5px 10px 0px 0px;
`;

export const CommunicationsTabContainer = styled(Tab)`
  text-transform: none;
  max-width: 99.9%;
  .MuiTab-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }
`;

export const VerticalTabIconContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #b2e877;
  color: #192808;
  padding: 2px;
  border-radius: 20px;
  width: 30%;
  padding-left: 2px;
`;

export const VerticalTabContainer = styled.div`
  flex: 1;
  min-height: calc(100%);
  background-color: #f9f9f9;
`;
export const VerticalTabTitle = styled(Typography)`
  font-size: 10px !important;
  font-family: 'Inter-SemiBold' !important;
  color: #192808 !important;
  font-weight: bold !important;
  margin-left: 5px !important;
`;
export const VerticalTabSubtitle = styled(Typography)`
  font-size: 12px !important;
  font-family: 'Inter-Bold' !important;
  font-weight: bold !important;
  text-align: left !important;
`;
export const VerticalTabDescription = styled(Typography)`
  font-size: 10px !important;
  font-family: 'Inter-Regular' !important;
  text-align: left !important;
  font-style: italic !important;
`;
