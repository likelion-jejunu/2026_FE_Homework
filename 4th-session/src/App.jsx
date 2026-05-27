import { useEffect, useState } from 'react';
import axios from './api/axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // 현재 상영 중인 영화 목록 호출
      const request = await axios.get('/movie/now_playing');
      setMovies(request.data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>🎬 Movie Trend</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
            />
            <h3>{movie.title}</h3>
            <p>평점: ⭐ {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
