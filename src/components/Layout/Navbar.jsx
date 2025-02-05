import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();


  useEffect(() => {
    setTabValue(pathToIndex[location.pathname] ?? 0);
}, [location.pathname]);

  const pathToIndex = {
    "/flights": 0,
    "/hotels": 1,
    "/rentals": 2,
    // "/": 0,
  };
  // const [tabValue, setTabValue] = useState(pathToIndex[location.pathname]);
  const [tabValue, setTabValue] = useState(pathToIndex[location.pathname] ?? 0);

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar>
        <Typography
          variant="h5"
          component="a"
          href="/"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Google
        </Typography>
        <Tabs value={tabValue} onChange={(e, newVal) => setTabValue(newVal)}>
          {/* <Tab label="Flights" component="a" href="/flights" />
                    <Tab label="Hotels" component="a" href="/hotels" />
                    <Tab label="Vacation rentals" component="a" href="/rentals" /> */}
          <Tab label="Flights" component={Link} to="/flights" />
          <Tab label="Hotels" component={Link} to="/hotels" />
          <Tab label="Vacation rentals" component={Link} to="/rentals" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
