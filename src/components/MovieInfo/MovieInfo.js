import { Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerLink,
  LinkStyled,
  StyledLink,
} from './MovieInfo.styled';
export default function MovieInfo({ currentFilm }) {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    currentFilm;
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  return (
    <>
      <StyledLink to={backLink.current} state={{ from: location }}>
        Go back
      </StyledLink>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
        <div>
          <h2>
            {title} <span>{`(${release_date?.slice(0, 4)})`}</span>
          </h2>
          User Score: <span>{Math.round(vote_average * 10)}%</span>
          <h3> Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres && genres.map(genre => genre.name).join(' | ')}</p>
        </div>
      </Container>
      <div>
        <h3>Additional information</h3>
        <ContainerLink>
          <LinkStyled to="cast">Cast</LinkStyled>
          <LinkStyled to="reviews">Reviews</LinkStyled>
        </ContainerLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
MovieInfo.propTypes = {
  currentFilm: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,

    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};
