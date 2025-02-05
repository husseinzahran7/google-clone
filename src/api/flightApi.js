import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const BASE_URL = import.meta.env.VITE_RAPIDAPI_BASE_URL;


const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': BASE_URL
};

export const searchFlights = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/flights/search`, {
      headers,
      params: {
        originCode: params.origin,
        destinationCode: params.destination,
        date: params.departureDate,
        returnDate: params.returnDate,
        adults: params.adults,
        children: params.children,
        infants: params.infants,
        cabinClass: params.cabinClass,
        currency: 'USD'
      }
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const airportAutocomplete = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/airports/auto-complete`, {
      headers,
      params: { query }
    });
    return response.data;
  } catch (error) {
    console.error('Autocomplete Error:', error);
    throw error;
  }
};

// ==============================
// import axios from 'axios';

// // Environment variables (in .env.local)
// const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
// const API_HOST = import.meta.env.VITE_RAPIDAPI_HOST;  // Should be 'sky-scrapper.p.rapidapi.com'
// const BASE_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1';  // Direct API base URL

// const headers = {
//   'X-RapidAPI-Key': API_KEY,
//   'X-RapidAPI-Host': API_HOST,
//   'Content-Type': 'application/json'
// };

// export const searchFlights = async (params) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/flights/search`, {
//       headers,
//       params: {
//         originCode: params.origin,
//         destinationCode: params.destination,
//         date: params.departureDate,
//         returnDate: params.returnDate,
//         adults: params.adults,
//         children: params.children,
//         infants: params.infants,
//         cabinClass: params.cabinClass,
//         currency: 'USD'
//       },
//       mode: 'cors'  // Add mode to the config object
//     });
//     return response.data;
//   } catch (error) {
//     console.error('API Error:', error);
//     throw error;
//   }
// };

// export const airportAutocomplete = async (query) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/airports/auto-complete`, {
//       headers,
//       params: { query },
//       mode: 'cors'  // Add mode here too
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Autocomplete Error:', error);
//     throw error;
//   }
// };