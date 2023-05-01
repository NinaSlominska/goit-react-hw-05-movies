import PropTypes from 'prop-types';
import { ListMovie, Link } from './FilmsList.styled';
import { useLocation } from 'react-router-dom';
export default function FilmsList({ films }) {
  const location = useLocation();
  return (
    <>
      <ListMovie>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ListMovie>
    </>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};
