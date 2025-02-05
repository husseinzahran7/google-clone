import axios from 'axios';

const rapidApi = axios.create({
  baseURL: 'https://sky-scrapper.p.rapidapi.com/api/v1',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
  }
});

export const searchFlights = async (params) => {
  const response = await rapidApi.get('/flights/search', { params });
  return response.data.data;
};