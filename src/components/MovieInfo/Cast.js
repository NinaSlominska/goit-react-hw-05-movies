import { fetchMovieCast } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
  const [currentFilm, setCurentFilm] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetch = async () => {
      try {
        const film = await fetchMovieCast(movieId);
        setCurentFilm(film.cast);
      } catch (error) {}
    };
    fetch();
  }, [movieId]);
  if (currentFilm.length === 0) {
    return <p>Sorry we don't have any cast for this movie</p>;
  }
  return (
    <div>
      <ul>
        {currentFilm?.map(({ profile_path, name, character, id }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              ></img>
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
