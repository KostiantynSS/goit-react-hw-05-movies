import { Link, useLocation } from 'react-router-dom';
const MoviesList = ({ moviesArr, url }) => {
  const location = useLocation();
  return (
    <ul>
      {moviesArr.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`${url}${id}`} state={{ from: location }}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
