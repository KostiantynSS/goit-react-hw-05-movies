import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { apiHandler } from 'helpers/apiHandler';
const imgSrc = 'https://image.tmdb.org/t/p/w500/';
const MovieDetails = () => {
  const { movieId } = useParams();

  const [Movie, setMovie] = useState({});

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await apiHandler(`movie/${movieId}`);
        setMovie(response);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [movieId]);
  const { title, backdrop_path, vote_average } = Movie;
  return (
    <div>
      <img src={imgSrc + backdrop_path} alt="" />
      <h2>{title}</h2>
      <p></p>
      <h3>Overview</h3>
      <p>Vote average: {vote_average * 10 + '%'}</p>
      <h4>Genres</h4>
      <ul>
        {/* {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))} */}
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
      <Outlet />
    </div>
  );
};

export default MovieDetails;
