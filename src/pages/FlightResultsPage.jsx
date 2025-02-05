import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, Grid } from '@mui/material';

const FlightResultsPage = () => {
  const { state } = useLocation();
  const results = state?.results;

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Flight Results
      </Typography>
      {results?.data?.map((flight) => (
        <Paper key={flight.id} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="subtitle1">
                {flight.airline} - {flight.flightNumber}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>
                {flight.departureTime} → {flight.arrivalTime}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">
                ${flight.price}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default FlightResultsPage;