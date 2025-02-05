import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Paper,
  Grid,
  TextField,
  InputAdornment,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Select,
  MenuItem,
  Typography,
  IconButton,
  Box,
  FormHelperText,
  Menu,
} from "@mui/material";
import {
  Search,
  FlightTakeoff,
  FlightLand,
  DateRange,
  ArrowForward,
} from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PeopleIcon from "@mui/icons-material/People";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { searchFlights, airportAutocomplete } from '../api/flightApi';
import { useNavigate } from 'react-router-dom';

const GoogleFlightsClone = () => {
  const [tripType, setTripType] = useState("round");
  const [cabinClass, setCabinClass] = useState("economy");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [origin, setOrigin] = useState("Amman");
  const [destination, setDestination] = useState("");
  //   const [tabValue, setTabValue] = useState(0);

  const navigate = useNavigate();

  // Add loading state
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  // Add this state variable
  const [passengersAnchorEl, setPassengersAnchorEl] = useState(null);
  const passengersOpen = Boolean(passengersAnchorEl);

  // Add autocomplete states
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infantsInSeat, setInfantsInSeat] = useState(0);
  const [infantsOnLap, setInfantsOnLap] = useState(0);

  const handleIncrement = (setter, value) => () => setter(value + 1);
  const handleDecrement = (setter, value) => () =>
    value > 0 && setter(value - 1);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Add these handlers
  const handlePassengersClick = (event) => {
    setPassengersAnchorEl(event.currentTarget);
  };

  const handlePassengersClose = () => {
    setPassengersAnchorEl(null);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClassSelect = (value) => {
    setCabinClass(value);
    handleMenuClose();
  };

  // Add these state variables
  const [classAnchorEl, setClassAnchorEl] = useState(null);
  const classOpen = Boolean(classAnchorEl);

  // Add these handlers
  const handleClassClick = (event) => {
    setClassAnchorEl(event.currentTarget);
  };

  const handleClassClose = () => {
    setClassAnchorEl(null);
  };

  // Add this total passengers calculation
  const totalPassengers = adults + children + infantsInSeat + infantsOnLap;

    // Modify your Explore flights button handler
    const handleSearch = async () => {
        setLoading(true);
        try {
          const params = {
            origin: origin,
            destination: destination,
            departureDate: departureDate?.format('YYYY-MM-DD'),
            returnDate: tripType === 'round' ? returnDate?.format('YYYY-MM-DD') : undefined,
            adults,
            children,
            infants: infantsInSeat + infantsOnLap,
            cabinClass: cabinClass.toLowerCase()
          };
          const results = await searchFlights(params);
      navigate('/flights/results', { state: { results } });
    } catch (error) {
      console.error('Search failed:', error);
      // Handle error (show toast/notification)
    } finally {
      setLoading(false);
    }
  };

//   ========================
const testAPI = async () => {
    try {
      const testResults = await airportAutocomplete('new york');
      console.log('API Test Results:', testResults);
    } catch (error) {
      console.error('API Test Failed:', error);
    }
  };
// ========================


    // Add autocomplete handlers
    const handleOriginInput = async (e) => {
        const value = e.target.value;
        setOrigin(value);
        if (value.length > 2) {
          const suggestions = await airportAutocomplete(value);
          setOriginSuggestions(suggestions);
        }
      };

      const handleDestinationInput = async (e) => {
        const value = e.target.value;
        setDestination(value);
        if (value.length > 2) {
          const suggestions = await airportAutocomplete(value);
          setDestinationSuggestions(suggestions);
        }
      };

  const Counter = ({ value, setValue, label }) => (
    <Grid container alignItems="center" spacing={1} sx={{ mb: 2 }}>
      <Grid item xs={6} container alignItems="center">
        <Typography variant="body1">{label}</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        container
        alignItems="center"
        justifyContent="flex-end"
        sx={{ gap: 1 }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={handleDecrement(setValue, value)}
            aria-label="decrease"
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1" sx={{ mx: 2 }}>
            {value}
          </Typography>
          <IconButton
            onClick={handleIncrement(setValue, value)}
            aria-label="increase"
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );

  return (
    <div>
      <Paper
        elevation={2}
        sx={{ maxWidth: 1000, mx: "auto", mt: 4, p: 3, borderRadius: 2 }}
      >
        <Grid container spacing={2}>
          {/* Trip Type & Class Selection */}
          <Grid item xs={12} container spacing={2}>
            <Grid item>
              <ToggleButtonGroup
                value={tripType}
                exclusive
                onChange={(e, newVal) => setTripType(newVal)}
              >
                <ToggleButton value="round">Round trip</ToggleButton>
                <ToggleButton value="oneway">One-way</ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            {/* Passengers Counter */}
            {/* <Box sx={{ display: "flex", gap: 2 }}> */}
            <Button
              variant="text"
              onClick={handlePassengersClick}
              startIcon={<PeopleIcon />}
            //   PaperProps={{
            //     sx: {
            //       backgroundColor: "grey",
            //       "& .MuiMenuItem-root": {
            //         color: "black",
            //       },
            //     },
            //   }}
              sx={{
                justifyContent: "space-between",
                color: passengersOpen ? "black" : "grey",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              {totalPassengers} Passenger{totalPassengers !== 1 ? "s" : ""}
              <ExpandMoreIcon sx={{ ml: 1 }} />
            </Button>

              
            <Menu
              anchorEl={passengersAnchorEl}
              open={passengersOpen}
              onClose={handlePassengersClose}
            //   PaperProps={{ sx: { p: 2, minWidth: 300 } }}
            PaperProps={{  
                sx: { 
                  p: 2, 
                  minWidth: 300,
                //   backgroundColor: 'grey',
                  '& .MuiMenuItem-root': {
                    color: 'black',
                  },
                }
              }}
            >
              <Counter value={adults} setValue={setAdults} label="Adults" />
              <Counter
                value={children}
                setValue={setChildren}
                label="Children"
              />
              <FormHelperText sx={{ mt: -2, mb: 2 }}> Aged 2-11</FormHelperText>
              <Counter
                value={infantsInSeat}
                setValue={setInfantsInSeat}
                label="Infants"
              />
              <FormHelperText sx={{ mt: -2, mb: 2 }}>In seat</FormHelperText>

              <Counter
                value={infantsOnLap}
                setValue={setInfantsOnLap}
                label="Infants"
              />
              <FormHelperText sx={{ mt: -2, mb: 2 }}>On lap</FormHelperText>

              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Button variant="outlined" sx={{ mr: 2 }}>
                  Cancel
                </Button>
                <Button variant="contained" 
                onClick={() => handlePassengersClose()}
                >Done</Button>
                    
              </Box>
              {/* </Box> */}
            </Menu>

            {/* Class Selection */}

            <Grid item>
              <Button
                variant="text"
                onClick={handleClassClick}
                sx={{
                  justifyContent: "space-between",
                  color: classOpen ? "black" : "grey",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                {cabinClass.charAt(0).toUpperCase() + cabinClass.slice(1)}
                <ExpandMoreIcon sx={{ ml: 1 }} />
              </Button>
              <Menu
                anchorEl={classAnchorEl}
                open={classOpen}
                onClose={handleClassClose}
                PaperProps={{ sx: { p: 2, minWidth: 200 } }}
              >
                <MenuItem
                  onClick={() => {
                    setCabinClass("economy");
                    handleClassClose();
                  }}
                >
                  Economy
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setCabinClass("premium");
                    handleClassClose();
                  }}
                >
                  Premium Economy
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setCabinClass("business");
                    handleClassClose();
                  }}
                >
                  Business
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setCabinClass("first");
                    handleClassClose();
                  }}
                >
                  First Class
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>

          {/* Location Inputs */}
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              placeholder="From"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightTakeoff color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid> */}

          {/* Origin Input */}
<Grid item xs={12} sm={6}>
  <TextField
    fullWidth
    placeholder="From"
    value={origin}
    onChange={handleOriginInput}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Search color="action" />
        </InputAdornment>
      ),
    }}
  />
  {originSuggestions.length > 0 && (
    <Paper elevation={3} sx={{ mt: 1, position: 'absolute', zIndex: 1 }}>
      {originSuggestions.map((airport) => (
        <MenuItem 
          key={airport.code} 
          onClick={() => {
            setOrigin(airport.code);
            setOriginSuggestions([]);
          }}
        >
          {airport.name} ({airport.code})
        </MenuItem>
      ))}
    </Paper>
  )}
</Grid>

{/* Destination Input */}
<Grid item xs={12} sm={6}>
  <TextField
    fullWidth
    placeholder="Where to?"
    value={destination}
    onChange={handleDestinationInput}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <FlightTakeoff color="action" />
        </InputAdornment>
      ),
    }}
  />
  {destinationSuggestions.length > 0 && (
    <Paper elevation={3} sx={{ mt: 1, position: 'absolute', zIndex: 1 }}>
      {destinationSuggestions.map((airport) => (
        <MenuItem 
          key={airport.code} 
          onClick={() => {
            setDestination(airport.code);
            setDestinationSuggestions([]);
          }}
        >
          {airport.name} ({airport.code})
        </MenuItem>
      ))}
    </Paper>
  )}
</Grid>

          {/* Date Pickers */}
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
                        <DateRange color="action" />
                      </InputAdornment>
                    ),
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
              disabled={tripType === "oneway"}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateRange color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>

          {/* Search Button */}
          <Grid item xs={12}>
            {/* <Button
              component="a"
              href="/search"
              fullWidth
              variant="contained"
              size="large"
              startIcon={<FlightLand />}
              endIcon={<ArrowForward />}
              sx={{ py: 2, borderRadius: 1 }}
            >
              Explore flights
            </Button> */}
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<FlightLand />}
              endIcon={<ArrowForward />}
              sx={{ py: 2, borderRadius: 1 }}
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Searching..." : "Explore flights"}
            </Button>

           
          </Grid>
        </Grid>

         {/* test btn remove later */}
         {/* <Button onClick={testAPI} style={{ display: '' }}>Test API</Button> */}
         {/*  */}

      </Paper>
    </div>
  );
};

// Don't forget to wrap your app with LocalizationProvider
export default GoogleFlightsClone;
