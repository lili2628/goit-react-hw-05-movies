import { getMovieReviews } from 'services/fetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { List, Author, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
      getMovieReviews(movieId)
          .then(({ results }) => {
                setReviews(results);
           })
           .catch(error => {
                console.log(error);
           });
  }, [movieId]);


  if (!reviews) {
    return;
  }

  return (
    <List>
      {reviews.length === 0 && <p>Nothing</p>}

      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <Author>{author}</Author>
          <Text>{content}</Text>
        </li>
      ))}
    </List>
  );
};

export default Reviews;