import { getMovieReviews } from 'services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, Author, Text, Empty } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews);
  }, [movieId]);


  if (!reviews) {
    return;
  }

  return (
    <List>
      {reviews.length === 0 && <Empty>Nothing</Empty>}

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