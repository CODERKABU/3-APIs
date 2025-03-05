import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Dogs from './pages/Dogs';
import Movies from './pages/Movies';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <nav className="sticky top-0 z-10 backdrop-blur-md bg-white/10 border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  API Dashboard
                </span>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-white hover:text-blue-400 transition-colors duration-200 ${
                        isActive ? 'text-blue-400' : 'text-gray-300'
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/weather"
                    className={({ isActive }) =>
                      `text-white hover:text-blue-400 transition-colors duration-200 ${
                        isActive ? 'text-blue-400' : 'text-gray-300'
                      }`
                    }
                  >
                    Weather
                  </NavLink>
                  <NavLink
                    to="/dogs"
                    className={({ isActive }) =>
                      `text-white hover:text-blue-400 transition-colors duration-200 ${
                        isActive ? 'text-blue-400' : 'text-gray-300'
                      }`
                    }
                  >
                    Dogs
                  </NavLink>
                  <NavLink
                    to="/movies"
                    className={({ isActive }) =>
                      `text-white hover:text-blue-400 transition-colors duration-200 ${
                        isActive ? 'text-blue-400' : 'text-gray-300'
                      }`
                    }
                  >
                    Movies
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;