import axios from 'axios';

const unsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID 2bzCEUZ-gXxorei6UpmXvgsuZQLuwIaqDvP5XenFwEI`,
  },
});

export const fetchImages = (query) => {
  return unsplashAPI.get('/search/photos', {
    params: { query, per_page: 10 },
  });
};
