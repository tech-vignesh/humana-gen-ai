import React from "react";
import CollapsibleCard from "../../shared/card/CollapsibleCard";
import ChatBox from "../chat/ChatBox";
import Details from "../member/Details";
import Header from "../../shared/header/Header";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header logoSrc="https://assets.humana.com/is/image/humana/2022_Humana_Logo_RGB_Contrast-Green_No-R_No-Pad_Horiz-1?fmt=png-alpha" />
      <div style={{ display: "flex", flex: 1 }}>
        <ChatBox />
        {/* <CollapsibleCard title="Member Details" content={<Details />} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
