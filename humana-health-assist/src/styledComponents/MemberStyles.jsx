import styled from 'styled-components';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';


export const MemberListItem = styled(ListItem)`
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important; 
    padding-left: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
`;

export const MemberLinkItem = styled(Link)`
    color: #2020ff !important;
    font-size: 11px !important;
    font-family: "Inter-Regular" !important;
`;

export const MemberLinkDescription = styled.div`
    font-size: 10px !important;
    font-family: "Inter-Regular" !important;
`;

export const MemberQuickLinkTitle = styled.p`
    text-align: left !important;
    font-size: 14px !important;
    font-family: "Inter-SemiBold" !important;
    font-weight: bold !important;
    margin-top: 6px !important;
`;

export const MemberAccordionTitle = styled(Typography)`
    font-size: 12px !important;
    font-weight: bold !important;
    font-family: "Inter-SemiBold" !important;
`;

export const MemberImageContainer = styled.div`
    margin-bottom: 5px !important;
`;

export const MemberDetailTitle = styled.div`
    text-align: left !important;
    margin-left: 80px !important;
    font-weight: bold !important;
    font-size: 16px !important;
    font-family: "Inter-SemiBold" !important;
`;

export const MemberDetailSubTitle = styled.div`
    text-align: left !important;
    margin-left: 80px !important;
    font-size: 12px !important;
    font-family: "Inter-Regular" !important;
`;
