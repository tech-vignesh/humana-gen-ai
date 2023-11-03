import React, { useState } from "react";
import UserProfile from "../../assets/profile/User.jpg";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { PaperContainer, DivContainer } from "../../styledComponents/CommonStyles";
import AccordionSummary from '@mui/material/AccordionSummary';
import {
  MemberAccordionTitle,
  MemberDetailSubTitle,
  MemberDetailTitle,
  MemberImageContainer,
  MemberLinkDescription,
  MemberLinkItem,
  MemberListItem,
  MemberQuickLinkTitle,
} from '../../styledComponents/MemberStyles';
import {
  LeftAlignedText,
  BoldText,
  FlexContainer,
} from '../../styledComponents/StyledChatComponents';

const Details = () => {
  const [expandedAccordion1, setExpandedAccordion1] = useState(false);
  const [expandedAccordion2, setExpandedAccordion2] = useState(false);
  const [expandedAccordion3, setExpandedAccordion3] = useState(false);
  const [expandedAccordion4, setExpandedAccordion4] = useState(false);

  const memberData = {
    img: "path_to_profile_picture",
    firstName: "John",
    lastName: "Doe",
    memberId: "123456",
    dob: "01/01/1990",
    coverage_start_date: "01/01/2023",
    coverage_end_date: "12/31/2023",
    deductible: "$1000",
    current_balance: "$500",
    out_of_pocket_max: "$2000",
    mobile_number: "555-555-5555",
    email: "john.doe@example.com",
    address: "123 Main St, City, State, ZIP",
    emergency_contact_name: "Jane Doe",
    emergency_contact_number: "555-555-5556",
    notes: "Additional notes or information here",
  };

  const handleChangeAccordion1 = () => {
    setExpandedAccordion1(!expandedAccordion1);
  };

  const handleChangeAccordion2 = () => {
    setExpandedAccordion2(!expandedAccordion2);
  };

  const handleChangeAccordion3 = () => {
    setExpandedAccordion3(!expandedAccordion3);
  };

  const handleChangeAccordion4 = () => {
    setExpandedAccordion4(!expandedAccordion4);
  };

  return (
    <PaperContainer>
      <MemberImageContainer>
        <img className="member_profile" src={UserProfile} alt="Profile pic" />
      </MemberImageContainer>
      <MemberDetailTitle>
        {memberData.firstName || "N/A"}
        {memberData.lastName || "N/A"}
      </MemberDetailTitle>
      <MemberDetailSubTitle>
        {memberData.memberId || "N/A"}
      </MemberDetailSubTitle>
      <MemberDetailSubTitle>{memberData.dob || "N/A"}</MemberDetailSubTitle>

      <>
        <Accordion
          expanded={expandedAccordion1}
          onChange={handleChangeAccordion1}
        >
          <AccordionSummary
            expanded={expandedAccordion1}
            onClick={handleChangeAccordion1}
          >
            <MemberAccordionTitle>Plan & Coverage</MemberAccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
            
              <>
                <LeftAlignedText>
                  Plan: <br />
                  <BoldText>{memberData.plan || "N/A"}</BoldText>
                </LeftAlignedText>
                <FlexContainer>
                  <div>
                    <LeftAlignedText>
                      Coverage Start:
                      <br />
                      <BoldText>
                        {memberData.coverage_start_date || "N/A"}
                      </BoldText>
                    </LeftAlignedText>

                    <LeftAlignedText>
                      Deductible:
                      <br />
                      <BoldText>
                        {memberData.deductible || "N/A"}
                      </BoldText>
                    </LeftAlignedText>
                  </div>
                  <div>
                    <LeftAlignedText>
                      Coverage End:
                      <br />
                      <BoldText>
                        {memberData.coverage_end_date || "N/A"}
                      </BoldText>
                    </LeftAlignedText>
                    <LeftAlignedText>
                      Out-Of-Pocket Max:
                      <br />
                      <BoldText>
                        {memberData.out_of_pocket_max || "N/A"}
                      </BoldText>
                    </LeftAlignedText>
                  </div>
                </FlexContainer>
                <LeftAlignedText>
                  Current Balance: <br />
                  <BoldText>
                    {memberData.current_balance || "N/A"}
                  </BoldText>
                </LeftAlignedText>
              </>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedAccordion2}
          onChange={handleChangeAccordion2}
        >
          <AccordionSummary
            expanded={expandedAccordion2}
            onClick={handleChangeAccordion2}
          >
            <MemberAccordionTitle>Recent Claims</MemberAccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <LeftAlignedText>
                Claim #1 Details: <br />
                <BoldText>{memberData.claim1 || "N/A"}</BoldText>
              </LeftAlignedText>
              <LeftAlignedText>
                Claim #2 Details: <br />
                <BoldText>{memberData.claim2 || "N/A"}</BoldText>
              </LeftAlignedText>
              <LeftAlignedText>
                Claim #3 Details: <br />
                <BoldText>{memberData.claim3 || "N/A"}</BoldText>
              </LeftAlignedText>
            </>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedAccordion3}
          onChange={handleChangeAccordion3}
        >
          <AccordionSummary
            expanded={expandedAccordion3}
            onClick={handleChangeAccordion3}
          >
            <MemberAccordionTitle>Contact Info</MemberAccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
              <>
                <LeftAlignedText>
                  Mobile Phone <br />
                  <BoldText>{memberData.mobile_number || "N/A"}</BoldText>
                </LeftAlignedText>
                <LeftAlignedText>
                  Email <br />
                  <BoldText>{memberData.email || "N/A"}</BoldText>
                </LeftAlignedText>
                <LeftAlignedText>
                  Address <br />
                  <BoldText>{memberData.address || "N/A"}</BoldText>
                </LeftAlignedText>
              </>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedAccordion4}
          onChange={handleChangeAccordion4}
        >
          <AccordionSummary
            expanded={expandedAccordion4}
            onClick={handleChangeAccordion4}
          >
            <MemberAccordionTitle>Additional Contact Info</MemberAccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
            {memberData && (
              <>
                <LeftAlignedText>
                  Emergency Contacts <br />
                  <BoldText>
                    {memberData.emergency_contact_name || "N/A"} :
                    {memberData.emergency_contact_number || "N/A"}
                  </BoldText>
                </LeftAlignedText>
                <LeftAlignedText>
                  Notes <br />
                  <BoldText>{memberData.notes || "N/A"}</BoldText>
                </LeftAlignedText>
              </>
            )}
          </AccordionDetails>
        </Accordion>
      </>
      {/* <MemberQuickLinkTitle>Quick Links</MemberQuickLinkTitle>
      <List>
        {linkData.map((data, index) => (
          <MemberListItem key={index}>
            {data.icon}
            <div>
              <MemberLinkItem href={data.href} target={data.target}>
                {data.linkTitle}
              </MemberLinkItem>
              <MemberLinkDescription>{data.description}</MemberLinkDescription>
            </div>
          </MemberListItem>
        ))}
      </List> */}
    </PaperContainer>
  );
};

export default Details;
