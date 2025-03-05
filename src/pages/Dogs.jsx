import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomDogs, fetchBreeds, fetchBreedImages } from '../redux/actions/dogActions';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Dogs = () => {
  const dispatch = useDispatch();
  const { images, breeds, selectedBreed, loading, error } = useSelector(state => state.dog);
  
  useEffect(() => {
    dispatch(fetchRandomDogs());
    dispatch(fetchBreeds());
  }, [dispatch]);
  
  const handleBreedChange = (e) => {
    const breed = e.target.value;
    if (breed === 'random') {
      dispatch(fetchRandomDogs());
    } else {
      dispatch(fetchBreedImages(breed));
    }
  };
  
  const handleRefresh = () => {
    if (selectedBreed && selectedBreed !== 'random') {
      dispatch(fetchBreedImages(selectedBreed));
    } else {
      dispatch(fetchRandomDogs());
    }
  };
  
  const getBreedFromUrl = (url) => {
    try {
      const parts = url.split('/');
      const breedPart = parts[parts.indexOf('breeds') + 1];
      return breedPart.split('-').join(' ');
    } catch (e) {
      return 'Unknown breed';
    }
  };
  
  return (
    <div className="container">
      <div className="page-header">
        <h1>Dog Gallery</h1>
        <p>Browse adorable dog images from various breeds</p>
      </div>
      
      <div className="search-bar">
        <select 
          onChange={handleBreedChange} 
          value={selectedBreed || 'random'}
          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
        >
          <option value="random">Random Dogs</option>
          {breeds.map(breed => (
            <option key={breed} value={breed}>
              {breed.charAt(0).toUpperCase() + breed.slice(1)}
            </option>
          ))}
        </select>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
      
      {loading && <LoadingSpinner />}
      
      {error && <ErrorMessage message={error} />}
      
      {!loading && !error && (
        <div className="content-grid">
          {images.map((image, index) => (
            <div key={index} className="dog-card glass-card">
              <img src={image} alt="Dog" />
              <p className="breed-name">
                {selectedBreed && selectedBreed !== 'random'
                  ? selectedBreed.charAt(0).toUpperCase() + selectedBreed.slice(1)
                  : getBreedFromUrl(image)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dogs;