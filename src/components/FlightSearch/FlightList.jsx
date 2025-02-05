import React from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material';
import FlightCard from './FlightCard';
import ErrorMessage from './ErrorMessage';

const FlightList = ({ flights, loading, error }) => {
  if (loading) return <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />;
  if (error) return <ErrorMessage message={error} />;
  if (flights.length === 0) return <Typography variant="body1" textAlign="center">No flights found</Typography>;

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {flights.map((flight, index) => (
        <Grid item xs={12} key={index}>
          <FlightCard flight={flight} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FlightList; // Proper default export