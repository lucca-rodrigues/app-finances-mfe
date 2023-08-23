import React from "react";
import { TextField, Typography, Box } from "@mui/material";

export default function Input({ label, errorMessage, ...rest }) {
  return (
    <Box sx={{ width: "100%" }}>
      {label && (
        <Typography variant="caption" display="block" gutterBottom>
          {label}
        </Typography>
      )}
      <TextField variant="outlined" error={errorMessage} sx={{ width: "100%" }} {...rest} />
    </Box>
  );
}
