import axios from 'axios';

const DOG_API_URL = 'https://dog.ceo/api';

export const fetchRandomDogs = (count = 8) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DOGS_REQUEST' });
    
    try {
      const response = await axios.get(`${DOG_API_URL}/breeds/image/random/${count}`);
      
      dispatch({
        type: 'FETCH_DOGS_SUCCESS',
        payload: response.data.message
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_DOGS_FAILURE',
        payload: error.message
      });
    }
  };
};

export const fetchBreeds = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DOGS_REQUEST' });
    
    try {
      const response = await axios.get(`${DOG_API_URL}/breeds/list/all`);
      const breeds = Object.keys(response.data.message);
      
      dispatch({
        type: 'FETCH_BREEDS_SUCCESS',
        payload: breeds
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_DOGS_FAILURE',
        payload: error.message
      });
    }
  };
};

export const fetchBreedImages = (breed, count = 8) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DOGS_REQUEST' });
    dispatch({ type: 'SET_SELECTED_BREED', payload: breed });
    
    try {
      const response = await axios.get(`${DOG_API_URL}/breed/${breed}/images/random/${count}`);
      
      dispatch({
        type: 'FETCH_BREED_IMAGES_SUCCESS',
        payload: response.data.message
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_DOGS_FAILURE',
        payload: error.message
      });
    }
  };
};