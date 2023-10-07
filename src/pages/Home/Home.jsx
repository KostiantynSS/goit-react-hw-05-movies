import MoviesList from 'components/MoviesList/MoviesList';
import css from './home.module.css';
import { apiHandler } from 'helpers/apiHandler';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await apiHandler('trending/all/day');
        setMovies(results);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, []);
  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <MoviesList moviesArr={movies} />
    </div>
  );
};

export default Home;
