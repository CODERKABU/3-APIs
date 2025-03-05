const initialState = {
    images: [],
    breeds: [],
    selectedBreed: null,
    loading: false,
    error: null
  };
  
  const dogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DOGS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_DOGS_SUCCESS':
        return {
          ...state,
          loading: false,
          images: action.payload,
          error: null
        };
      case 'FETCH_BREEDS_SUCCESS':
        return {
          ...state,
          breeds: action.payload,
          loading: false,
          error: null
        };
      case 'FETCH_BREED_IMAGES_SUCCESS':
        return {
          ...state,
          images: action.payload,
          loading: false,
          error: null
        };
      case 'SET_SELECTED_BREED':
        return {
          ...state,
          selectedBreed: action.payload
        };
      case 'FETCH_DOGS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default dogReducer;