// // // import React from 'react';
// // // import { Container, Box, Grid } from '@mui/material';
// // // import MainLayout from '../components/Layout/MainLayout';
// // // import FlightSearchForm from '../components/FlightSearch/FlightSearchForm';
// // // import FlightList from '../components/FlightSearch/FlightList';
// // // // import useFlightSearch from '../hooks/useFlightSearch';
// // // import useFlightSearch from '../hooks/useFlightSearch';
// // // import { useMobile } from '../theme/utils';

// // // const FlightSearchPage = () => {
// // //   const isMobile = useMobile();
// // //   const { flights, loading, error, search } = useFlightSearch();

// // //   return (
// // //     <MainLayout>
// // //       <Container maxWidth="lg">
// // //         <Box my={4}>
// // //           <FlightSearchForm 
// // //             onSubmit={search} 
// // //             isMobile={isMobile} 
// // //           />
// // //           <FlightList 
// // //             flights={flights} 
// // //             loading={loading} 
// // //             error={error} 
// // //           />
// // //         </Box>
// // //       </Container>
// // //     </MainLayout>
// // //   );
// // // };

// // // export default FlightSearchPage;

// // import React from 'react';
// // import { Container, Box } from '@mui/material';
// // import MainLayout from '../components/Layout/MainLayout';
// // import FlightSearchForm from '../components/FlightSearch/FlightSearchForm';
// // import FlightList from '../components/FlightSearch/FlightList';
// // import useFlightSearch from '../hooks/useFlightSearch';

// // const FlightSearchPage = () => {
// //   const { flights, loading, error, search } = useFlightSearch();

// //   return (
// //     <MainLayout>
// //       <Container maxWidth="lg">
// //         <Box my={4}>
// //           <FlightSearchForm onSubmit={search} />
// //           <FlightList flights={flights} loading={loading} error={error} />
// //         </Box>
// //       </Container>
// //     </MainLayout>
// //   );
// // };

// // export default FlightSearchPage;

// import React from 'react';
// import { Container, Box } from '@mui/material';
// import MainLayout from '../components/Layout/MainLayout'; // Correct import path
// import FlightSearchForm from '../components/FlightSearch/FlightSearchForm';
// import FlightList from '../components/FlightSearch/FlightList';
// import {useFlightSearch} from '../hooks/useFlightSearch';
// import FlightSearchCard from '../components/FlightSearch/FlightSearchCard';

// const FlightSearchPage = () => {
//   const { flights, loading, error, search } = useFlightSearch();

//   return (
//     <MainLayout>
//       <Container maxWidth="lg">
//         <Box my={4}>
//           <FlightSearchCard />
//         </Box>
          
//         <Box my={4}>
//           <FlightSearchForm onSubmit={search} />
//           <FlightList flights={flights} loading={loading} error={error} />
//         </Box>
//       </Container>
//     </MainLayout>
//   );
// };

// export default FlightSearchPage;

import React from 'react';
import { Container, Box } from '@mui/material';
import MainLayout from '../components/Layout/MainLayout';
import FlightSearchCard from '../components/FlightSearch/FlightSearchCard';
import FlightList from '../components/FlightSearch/FlightList';
import {useFlightSearch} from '../hooks/useFlightSearch';

const FlightSearchPage = () => {
  const { flights, loading, error, search } = useFlightSearch();

  const handleSearch = (searchParams) => {
    search({
      origin: searchParams.origin,
      destination: searchParams.destination,
      date: searchParams.departureDate,
      passengers: searchParams.passengers
    });
  };

  return (
    <MainLayout>
      
      <Container maxWidth="lg">
      
      <Box 
        sx={{
          width: '100%',
          // bgcolor: 'primary.main',
          color: 'black',
          py: 2,
          mb: 3,
          textAlign: 'center',
        }}
      >
        
        {"Flights"}
      </Box>
        <Box my={4}>
          <FlightSearchCard onSubmit={handleSearch} />
          <FlightList flights={flights} loading={loading} error={error} />
        </Box>
      </Container>
    </MainLayout>
  );
};

export default FlightSearchPage;

