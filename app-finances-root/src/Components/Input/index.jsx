import React from "react";
import { TextField, Typography } from "@mui/material";

export default function Input({ label, errorMessage, ...rest }) {
  return (
    <>
      {label && (
        <Typography variant="caption" display="block" gutterBottom>
          {label}
        </Typography>
      )}
      <TextField variant="outlined" error={errorMessage} {...rest} />
    </>
  );
}
