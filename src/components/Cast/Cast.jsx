import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiHandler } from 'helpers/apiHandler';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await apiHandler(`movie/${movieId}/credits`);
        const response = await apiHandler('/configuration');
        console.log(response);
        console.log(cast);
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
      <ul>
        {cast.map(({ name, character, id, profile_path }) => (
          <li key={id}>
            <img src={'http://image.tmdb.org/t/p/w45' + profile_path} alt="" />
            <p>Name: {name}</p>
            <p>Character: {character || 'Pyton'}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
