import { Link, useLocation } from 'react-router-dom';
const MoviesList = ({ moviesArr }) => {
  const location = useLocation();
  return (
    <ul>
      {moviesArr.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
