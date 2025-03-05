import axios from 'axios';

// Replace with your actual API key
const API_KEY = '80e824463be1f04110a9d22eb433934d';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={80e824463be1f04110a9d22eb433934d}';

export const fetchWeather = (city = 'London') => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_REQUEST' });
    
    try {
      // For demo purposes, we'll use a mock response if no API key is provided
      if (API_KEY === '80e824463be1f04110a9d22eb433934d') {
        // Mock data for demonstration
        const mockData = {
          name: city,
          main: {
            temp: 20 + Math.random() * 15,
            humidity: 60 + Math.floor(Math.random() * 30),
            pressure: 1010 + Math.floor(Math.random() * 20),
            feels_like: 18 + Math.random() * 15
          },
          weather: [
            {
              main: ['Clear', 'Clouds', 'Rain', 'Thunderstorm'][Math.floor(Math.random() * 4)],
              description: 'Weather description',
              icon: '01d'
            }
          ],
          wind: {
            speed: 2 + Math.random() * 8
          },
          sys: {
            country: 'GB'
          }
        };
        
        setTimeout(() => {
          dispatch({
            type: 'FETCH_WEATHER_SUCCESS',
            payload: mockData
          });
        }, 500);
      } else {
        const response = await axios.get(`${BASE_URL}/weather`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric'
          }
        });
        
        dispatch({
          type: 'FETCH_WEATHER_SUCCESS',
          payload: response.data
        });
      }
    } catch (error) {
      dispatch({
        type: 'FETCH_WEATHER_FAILURE',
        payload: error.message
      });
    }
  };
};