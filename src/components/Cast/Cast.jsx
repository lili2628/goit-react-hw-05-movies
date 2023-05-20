import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API';
import { List, Item, Img, Name, Character, Empty, Box } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const noImage = 'https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png';

  useEffect(() => {
      getMovieCredits(movieId)
          .then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <List>
      {cast.length === 0 && <Empty>Nothing</Empty>}

      {cast.map(({ id, profile_path, name, character }) => {
        if (profile_path) {
          return (
            <Item key={id}>
              <Img src={imgBaseUrl.concat(profile_path)} alt='' />
              <Box>
                <Name>{name}</Name>
                <Character>{character}</Character>
              </Box>
            </Item>
          );
        } else {
          return (
            <Item key={id}>
              <Img src={noImage} alt='' />
              <Box>
                <Name>{name}</Name>
                <Character>{character}</Character>
              </Box>
            </Item>
          );
        }
      })}
    </List>
  );
};

export default Cast;