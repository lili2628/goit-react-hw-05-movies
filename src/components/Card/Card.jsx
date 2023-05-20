import { Container, Img, Title, Wrapper, Year, Description, Text } from './Card.styled';
import PropTypes from 'prop-types';

function Card({ movie }) {
  const noImage = 'https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png';
  const { poster_path, title, release_date, vote_average, overview, genres } = movie;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const releaseDate = release_date.slice(0, 4);
  const voteScore = vote_average.toFixed(1);
  const genresList = genres.map(ganre => ganre.name).join(', ');

  if (poster_path) {
    return (
      <Container>
        <Img src={imgBaseUrl.concat(poster_path)} alt="{title}" width="350" />
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
  } else {
    return (
      <Container>
        <Img src={noImage} alt="{title}" width="350" />
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
  };
}


export default Card;

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })).isRequired,
    overview: PropTypes.string,
  }),
};