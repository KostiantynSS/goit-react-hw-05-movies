import { apiHandler } from 'helpers/apiHandler';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const MoviesList = () => {
  const [movies, setMovies] = useState([]);

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
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{title || name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
