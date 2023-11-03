import styled from '@emotion/styled';
import MuiTabs from '@mui/material/Tabs';
import { TabsProps } from '@mui/material/Tabs';


const StyledCommunicationTabs = styled(MuiTabs)`
  flex: 1;
  height: 100%;
  .MuiButtonBase-root.MuiTab-root {
    background: #f9f9f9;
    // margin-bottom: 15px;
    // margin-top: 10px;
    height: 100%;
    // overflowY: 'auto',
    border-right: 1px solid;
    
     border-right-color: #7eb545 !important;
     border-bottom-color: #7eb545 !important;
     align-items: start !important;
     -webkit-box-pack: start !important;
     -ms-flex-pack: start !important;

    &.Mui-selected {
      border-radius: 8px 0px 0px 8px;
      border-top: 1px solid;
      border-left: 1px solid;
      border-bottom: 1px solid;
      color: black !important;
      border-left-color: #7eb545 !important;
      border-right-color: #7eb545 !important;
      border-top-color: #7eb545 !important;
      border-right: none;
      border-bottom: 1px solid;
      background-color: #f4fbec !important;
      border-top-left: 1px solid;
      border-bottom-right: 1px solid;
    }
  }
  .MuiTabs-indicator {
    display: none;
  }
`;

export default StyledCommunicationTabs;