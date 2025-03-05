import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/actions/movieActions';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movie);
  
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(searchTerm));
  };
  
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('★');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('★');
      } else {
        stars.push('☆');
      }
    }
    
    return (
      <span style={{ color: '#FFD700' }}>
        {stars.join('')} ({rating.toFixed(1)})
      </span>
    );
  };
  
  return (
    <div className="container">
      <div className="page-header">
        <h1>Movie Explorer</h1>
        <p>Discover popular movies or search for your favorites</p>
      </div>
      
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      
      {loading && <LoadingSpinner />}
      
      {error && <ErrorMessage message={error} />}
      
      {!loading && !error && movies.length === 0 && (
        <div className="center-content">
          <p>No movies found. Try a different search term.</p>
        </div>
      )}
      
      {!loading && !error && movies.length > 0 && (
        <div className="content-grid">
          {movies.map(movie => (
            <div key={movie.id} className="movie-card glass-card">
              <img 
                src={movie.poster_path} 
                alt={movie.title}
                className="movie-poster"
              />
              <h3 className="movie-title">{movie.title}</h3>
              <div className="movie-rating">
                {renderRating(movie.vote_average)}
              </div>
              <p className="movie-year">
                {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
              </p>
              <p className="movie-overview">{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;