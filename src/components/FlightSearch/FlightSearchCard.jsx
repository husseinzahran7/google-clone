import React, { useState } from 'react';
import {
  Paper,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DatePicker } from '@mui/x-date-pickers';

const FlightSearchCard = () => {
    const [tripType, setTripType] = useState('round');
    const [passengers, setPassengers] = useState(1);
    const [cabinClass, setCabinClass] = useState('economy');
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      origin,
      destination,
      departureDate,
      returnDate,
      passengers,
      cabinClass,
      tripType
    });
  };

  return (
    // <Paper elevation={3} sx={{ p: 3, borderRadius: 4, maxWidth: 800, mx: 'auto' }}>
    <Paper component="form" onSubmit={handleSubmit} elevation={3} sx={{ p: 3, borderRadius: 4, maxWidth: 800, mx: 'auto' }}>
      <ToggleButtonGroup
        value={tripType}
        exclusive
        onChange={(e, newValue) => setTripType(newValue)}
        sx={{ mb: 2 }}
      >
        <ToggleButton value="round" sx={{ px: 3 }}>
          Round trip
        </ToggleButton>
        <ToggleButton value="oneway" sx={{ px: 3 }}>
          One way
        </ToggleButton>
      </ToggleButtonGroup>

      <Grid container spacing={2}>
        {/* Passengers & Class */}
        <Grid item xs={12} sm={8} md={3}>
          <Select
            fullWidth
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <MenuItem key={num} value={num}>
                {num} {num === 1 ? 'Passenger' : 'Passengers'}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Select
            fullWidth
            value={cabinClass}
            onChange={(e) => setCabinClass(e.target.value)}
          >
            <MenuItem value="economy">Economy</MenuItem>
            <MenuItem value="premium">Premium Economy</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="first">First Class</MenuItem>
          </Select>
        </Grid>

        {/* From/To */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            placeholder="From"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            placeholder="To"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightTakeoffIcon color="action" />
                </InputAdornment>
              )
            }}
          />
        </Grid> */}

<Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          placeholder="From"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          placeholder="To"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FlightTakeoffIcon color="action" />
              </InputAdornment>
            )
          }}
        />
      </Grid>
        <Grid item xs={12}>
            <div style={{ height: '20px' }} />
        </Grid>
        {/* Dates */}
        <Grid item xs={12} sm={6}>
          <DatePicker
            label="Departure"
            value={departureDate}
            onChange={(newValue) => setDepartureDate(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon color="action" />
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker
            label="Return"
            value={returnDate}
            onChange={(newValue) => setReturnDate(newValue)}
            disabled={tripType === 'oneway'}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon color="action" />
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
        </Grid>

        {/* Search Button */}
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            startIcon={<FlightLandIcon />}
            sx={{ py: 2, borderRadius: 2 }}
          >
            Explore Flights
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FlightSearchCard;