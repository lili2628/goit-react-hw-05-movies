import { Container, Img, Title, Wrapper, Year, Description, Text } from './Card.styled';
import PropTypes from 'prop-types';

function Card ({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } = movie;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const releaseDate = release_date.slice(0, 4);
  const voteScore = vote_average.toFixed(1);
  const genresList = genres.map(ganre => ganre.name).join(', ');

  return (
    <Container>
      <Img src={imgUrl} alt="{title}" width="350" />
      <Wrapper>
        <Title>
          {title} <Year>({releaseDate})</Year>
        </Title>
        <Description>
          User score: <Text>{voteScore}</Text>
        </Description>
        <Description>
          Overview: <Text>{overview}</Text>
        </Description>
        <Description>
          Genres: <Text>{genresList}</Text>
        </Description>
      </Wrapper>
    </Container>
  );
}

export default Card;

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })).isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};