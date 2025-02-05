// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import FlightSearchPage from './pages/FlightSearchPage';
// import { theme } from './theme';

// const App = () => (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <FlightSearchPage />
//   </ThemeProvider>
// );

// export default App;

// App.jsx
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import FlightSearchPage from './pages/FlightSearchPage';
import GoogleFlightsClone from './pages/GoogleFlightsClone';
import NotFound from './components/FlightSearch/NotFound';
import MainLayout from './components/Layout/MainLayout';
import FlightResultsPage from './pages/FlightResultsPage';

function App() {
  return (
    <BrowserRouter>
    <MainLayout>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
          <Routes>
            <Route path="/" element={<GoogleFlightsClone />} />
            <Route path="/flights" element={<GoogleFlightsClone />} />
            <Route path="/flights/results" element={<FlightResultsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        
      </ThemeProvider>
    </LocalizationProvider>
    </MainLayout>
    </BrowserRouter>
  );
}

export default App;