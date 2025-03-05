import axios from 'axios';

// Replace with your actual API key
const API_KEY = '1234567890abcdef';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = (searchTerm = '') => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_MOVIES_REQUEST' });
    dispatch({ type: 'SET_SEARCH_TERM', payload: searchTerm });
    
    try {
      // For demo purposes, we'll use a mock response if no API key is provided
      if (API_KEY === '1234567890abcdef') {
        // Mock data for demonstration
        const mockMovies = [
          {
            id: 1,
            title: 'Inception',
            poster_path: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
            vote_average: 8.4,
            release_date: '2010-07-16',
            overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
          },
          {
            id: 2,
            title: 'The Matrix',
            poster_path: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
            vote_average: 8.2,
            release_date: '1999-03-30',
            overview: 'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.'
          },
          {
            id: 3,
            title: 'Interstellar',
            poster_path: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
            vote_average: 8.6,
            release_date: '2014-11-05',
            overview: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.'
          },
          {
            id: 4,
            title: 'The Dark Knight',
            poster_path: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
            vote_average: 8.5,
            release_date: '2008-07-16',
            overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.'
          },
          {
            id: 5,
            title: 'Pulp Fiction',
            poster_path: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
            vote_average: 8.5,
            release_date: '1994-10-14',
            overview: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper.'
          },
          {
            id: 6,
            title: 'Fight Club',
            poster_path: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
            vote_average: 8.4,
            release_date: '1999-10-15',
            overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.'
          }
        ];
        
        // Filter movies if search term is provided
        const filteredMovies = searchTerm 
          ? mockMovies.filter(movie => 
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : mockMovies;
        
        setTimeout(() => {
          dispatch({
            type: 'FETCH_MOVIES_SUCCESS',
            payload: filteredMovies
          });
        }, 500);
      } else {
        const endpoint = searchTerm
          ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`
          : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
          
        const response = await axios.get(endpoint);
        
        dispatch({
          type: 'FETCH_MOVIES_SUCCESS',
          payload: response.data.results
        });
      }
    } catch (error) {
      dispatch({
        type: 'FETCH_MOVIES_FAILURE',
        payload: error.message
      });
    }
  };
};