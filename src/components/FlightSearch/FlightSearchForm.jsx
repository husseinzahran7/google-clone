import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const FlightSearchForm = ({ onSubmit, isMobile }) => {
  const [formData, setFormData] = React.useState({
    origin: '',
    destination: '',
    departureDate: new Date(),
    passengers: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      date: formData.departureDate.toISOString().split('T')[0]
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* Form fields same as previous example */}
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth={isMobile}
            variant="contained"
            size="large"
          >
            Search Flights
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FlightSearchForm;