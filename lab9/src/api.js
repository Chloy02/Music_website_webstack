// api.js
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = "2bzCEUZ-gXxorei6UpmXvgsuZQLuwIaqDvP5XenFwEI";

const unsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`, 
  },
});

// Fetch images based on a query
export const fetchImages = (query) => {
  return unsplashAPI.get('/search/photos', {
    params: { query, per_page: 10 },  
  });
};
