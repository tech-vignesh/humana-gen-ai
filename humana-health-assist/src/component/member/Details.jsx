import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

const Details = () => {
    
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
    
      return (
        <Box
        sx={{height: "100vh"}}
        >
          <Paper elevation={3}>
            <Box sx={{ padding: 2 }}>
              <img src={memberData.img} alt="Profile" />
              <Typography variant="body1">
                {memberData.firstName} {memberData.lastName}
              </Typography>
              <Typography variant="body2">Member ID: {memberData.memberId}</Typography>
              <Typography variant="body2">DOB: {memberData.dob}</Typography>
            </Box>
            <Box sx={{ padding: 2, borderTop: "1px solid #ccc" }}>
              <Typography variant="subtitle1">Coverage</Typography>
              <Typography variant="body2">
                Start Date: {memberData.coverage_start_date}
              </Typography>
              <Typography variant="body2">
                End Date: {memberData.coverage_end_date}
              </Typography>
            </Box>
            <Box sx={{ padding: 2, borderTop: "1px solid #ccc" }}>
              <Typography variant="subtitle1">Finances</Typography>
              <Typography variant="body2">Deductible: {memberData.deductible}</Typography>
              <Typography variant="body2">
                Current Balance: {memberData.current_balance}
              </Typography>
              <Typography variant="body2">
                Out-of-pocket Max: {memberData.out_of_pocket_max}
              </Typography>
            </Box>
            <Box sx={{ padding: 2, borderTop: "1px solid #ccc" }}>
              <Typography variant="subtitle1">Contact Info</Typography>
              <Typography variant="body2">
                Mobile Number: {memberData.mobile_number}
              </Typography>
              <Typography variant="body2">Email: {memberData.email}</Typography>
              <Typography variant="body2">Address: {memberData.address}</Typography>
            </Box>
            <Box sx={{ padding: 2, borderTop: "1px solid #ccc" }}>
              <Typography variant="subtitle1">Other Info</Typography>
              <Typography variant="body2">
                Emergency Contact: {memberData.emergency_contact_name}
              </Typography>
              <Typography variant="body2">
                Emergency Contact Number: {memberData.emergency_contact_number}
              </Typography>
              <Typography variant="body2">Notes: {memberData.notes}</Typography>
            </Box>
          </Paper>
        </Box>
      );
    
};

export default Details;