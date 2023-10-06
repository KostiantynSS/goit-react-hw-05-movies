import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { apiHandler } from 'helpers/apiHandler';
import css from './movieDetails.module.css';

const imgSrc = 'https://image.tmdb.org/t/p/w500/';
export const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [Movie, setMovie] = useState({});
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await apiHandler(`movie/${movieId}`);
        setMovie(response);
      } catch (err) {
        navigate('/movies');
        console.log(err);
      }
    };
    getMovies();
  }, [movieId, navigate]);
  const { title, backdrop_path, vote_average, genres, overview } = Movie;
  return (
    <div className={css.container}>
      <button className={css.back}>
        <Link to={backLink}> &#8592; Back</Link>
      </button>
      <img
        src={backdrop_path ? imgSrc + backdrop_path : defaultImg}
        width={250}
        alt="poster"
      />

      <h2>{title}</h2>
      <p></p>
      <h3>Overview</h3>
      {overview && <p>{overview}</p>}
      <p>Vote average: {(vote_average * 10).toFixed(2) + '%'}</p>
      <h4>Genres</h4>
      <ul>
        {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
      <p>Aditional information</p>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LoadinG...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
