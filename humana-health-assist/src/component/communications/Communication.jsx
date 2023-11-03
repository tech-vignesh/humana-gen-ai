import React, { useState } from "react";
import StyledCommunicationTabs from "../../styledComponents/StyledCommunicationsTabs";
import { DivContainer, PaperContainer } from "../../styledComponents/CommonStyles";
import "../window/ChatWindow.css";
import {
  ChatIconMUI,
  EmailIconMUI,
  PhoneIconMUI,
} from "../../styledComponents/IconStyles";
import {
  CommunicationsTabContainer,
  SearchContainer,
  VerticalTabContainer,
  VerticalTabDescription,
  VerticalTabSubtitle,
  VerticalTabIconContainer,
  VerticalTabTitle,
} from "../../styledComponents/CommunicationStyles"; 

const Communications = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabData = [
    {
      label: "CHAT",
      icon: <ChatIconMUI />,
      heading: "Provider Search",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      label: "EMAIL",
      icon: <EmailIconMUI />,
      heading: "Hospital Claim",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      label: "PHONE",
      icon: <PhoneIconMUI />,
      heading: "Hospital Claim",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      label: "VIDEO",
      icon: <PhoneIconMUI />,
      heading: "Telehealth Visit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <DivContainer>
      <PaperContainer>
        <SearchContainer>
          <input
            type="text"
            placeholder="Search Sessions"
            className="communication-search-input"
          />
        </SearchContainer>

        <VerticalTabContainer>
          <StyledCommunicationTabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
          >
            {tabData.map((tab, index) => (
              <CommunicationsTabContainer
                key={index}
                label={
                  <DivContainer>
                    <VerticalTabIconContainer>
                      {tab.icon}
                      <VerticalTabTitle>{tab.label}</VerticalTabTitle>
                    </VerticalTabIconContainer>
                    <VerticalTabSubtitle variant="subtitle1">
                      {tab.heading}
                    </VerticalTabSubtitle>
                    <VerticalTabDescription variant="body2">
                      {tab.description}
                    </VerticalTabDescription>
                  </DivContainer>
                }
                isSelected={value === index}
              />
            ))}
          </StyledCommunicationTabs>
        </VerticalTabContainer>
      </PaperContainer>
    </DivContainer>
  );
};

export default Communications;
