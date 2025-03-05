import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';
import dogReducer from './reducers/dogReducer';
import movieReducer from './reducers/movieReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  dog: dogReducer,
  movie: movieReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;