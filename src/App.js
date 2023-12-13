import {useState} from 'react';
import {useEffect} from 'react';
import './App.css';
import searchIcon from "./search.svg";  
import MovieCard from "./movieCard.jsx";
import Sidebar from './Components/Sidebar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview.jsx';

const API_URL = 'http://www.omdbapi.com?apikey=eb00ab6e';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  
  useEffect(() => {
    searchMovies({searchValue});
  }, [searchValue]);

  return (
    <div className="app">
         <Router>
        <Sidebar />
        <Routes>
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </Router>
      <h1>MovieLand</h1>
      <div className="search">
        <input 
          type="search"
          name="#" 
          placeholder='Search for movies' 
          value = {searchValue} 
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img 
          src= {searchIcon} 
          alt="Search"
          onClick={() => searchMovies(searchValue)}
        />
      </div>
        {movies?.length > 0
        ? (  
        <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
        </div>
        ) : (
          <p className='empty'>No movies found!</p>
      )}
    </div>
  );
}

export default App;
