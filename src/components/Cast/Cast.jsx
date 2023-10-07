import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiHandler } from 'helpers/apiHandler';
import { defaultImg } from 'pages/MovieDetails/MovieDetails';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        const { cast } = await apiHandler(`movie/${movieId}/credits`);

        setCast(cast);
      } catch (err) {
        console.log(err);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {' '}
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ name, character, id, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? 'http://image.tmdb.org/t/p/w45' + profile_path
                    : defaultImg
                }
                width={45}
                alt="actor"
              />
              <p>Name: {name}</p>
              <p>Character: {character || 'Pyton'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any information about cast</p>
      )}
    </>
  );
};
export default Cast;
