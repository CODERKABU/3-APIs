const initialState = {
    movies: [],
    loading: false,
    error: null,
    searchTerm: ''
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_MOVIES_SUCCESS':
        return {
          ...state,
          loading: false,
          movies: action.payload,
          error: null
        };
      case 'FETCH_MOVIES_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case 'SET_SEARCH_TERM':
        return {
          ...state,
          searchTerm: action.payload
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;