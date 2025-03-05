import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/actions/weatherActions';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Weather = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.weather);
  
  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };
  
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };
  
  return (
    <div className="container">
      <div className="page-header">
        <h1>Weather Information</h1>
        <p>Get real-time weather data for any city</p>
      </div>
      
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      
      {loading && <LoadingSpinner />}
      
      {error && <ErrorMessage message={error} />}
      
      {data && !loading && !error && (
        <div className="weather-card glass-card">
          <h2>{data.name}, {data.sys.country}</h2>
          
          <div className="weather-temp">
            {data.main.temp.toFixed(1)}°C
          </div>
          
          <p>{data.weather[0].main} - {data.weather[0].description}</p>
          
          <div className="weather-details">
            <div className="weather-detail">
              <span>Feels Like</span>
              <strong>{data.main.feels_like.toFixed(1)}°C</strong>
            </div>
            
            <div className="weather-detail">
              <span>Humidity</span>
              <strong>{data.main.humidity}%</strong>
            </div>
            
            <div className="weather-detail">
              <span>Wind</span>
              <strong>{data.wind.speed} m/s</strong>
            </div>
            
            <div className="weather-detail">
              <span>Pressure</span>
              <strong>{data.main.pressure} hPa</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;