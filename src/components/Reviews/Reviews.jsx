import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiHandler } from 'helpers/apiHandler';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    const getReview = async () => {
      try {
        const { results } = await apiHandler(`movie/${movieId}/reviews`);

        setReview(results);
      } catch (err) {
        console.log(err);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews</p>
      )}
    </>
  );
};
export default Reviews;
