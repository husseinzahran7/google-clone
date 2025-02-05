// import { useState } from 'react';
// import { searchFlights } from '../services/api';

// export const useFlightSearch = () => {
//   const [state, setState] = useState({
//     flights: [],
//     loading: false,
//     error: null
//   });

//   const search = async (searchParams) => {
//     try {
//       setState(prev => ({ ...prev, loading: true, error: null }));
//       const results = await searchFlights(searchParams);
//       setState({ flights: results, loading: false, error: null });
//     } catch (error) {
//       setState({ flights: [], loading: false, error: error.message });
//     }
//   };

//   return { ...state, search };
// };

import { useState } from 'react';
import { searchFlights } from '../services/api';

export const useFlightSearch = () => {
  const [state, setState] = useState({
    flights: [],
    loading: false,
    error: null
  });

  const search = async (params) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const results = await searchFlights(params);
      setState({ flights: results, loading: false, error: null });
    } catch (error) {
      setState({ flights: [], loading: false, error: error.message });
    }
  };

  return { ...state, search };
};