import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <h1>API Dashboard</h1>
        <p>
          Explore real-time weather data, browse adorable dog images, and discover popular movies all in one place.
        </p>
        
        <div className="features grid md:grid-cols-3 gap-4">
          <div className="feature-card glass-card">
            <h3>Weather API</h3>
            <p>
              Get real-time weather information for any city around the world. View temperature, humidity, wind speed, and more.
            </p>
            <Link to="/weather">
              <button>Check Weather</button>
            </Link>
          </div>
          
          <div className="feature-card glass-card">
            <h3>Dog API</h3>
            <p>
              Browse through adorable dog images from various breeds. Filter by breed to find your favorite furry friends.
            </p>
            <Link to="/dogs">
              <button>See Dogs</button>
            </Link>
          </div>
          
          <div className="feature-card glass-card">
            <h3>Movie API</h3>
            <p>
              Discover popular movies, search for your favorites, and get details like ratings, release dates, and overviews.
            </p>
            <Link to="/movies">
              <button>Explore Movies</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;