import React, { useState } from "react";
import { Card, CardHeader, CardContent, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const CollapsibleCard = ({ title, content }) => {
  const [minimized, setMinimized] = useState(false);

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <Card style={{ flex: 1, margin: 10 }}>
      <CardHeader
        title={title}
        action={
          <IconButton onClick={toggleMinimize}>
            {minimized ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </IconButton>
        }
      />
      <Collapse in={!minimized}>
        <CardContent>{content}</CardContent>
      </Collapse>
    </Card>
  );
};

export default CollapsibleCard;
