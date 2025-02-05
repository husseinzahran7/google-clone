import React from 'react';
import { Alert } from '@mui/material';

const ErrorMessage = ({ message }) => (
  <Alert severity="error" sx={{ margin: 2 }}>
    {message}
  </Alert>
);

export default ErrorMessage;