import { fetchMovieReviews } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [currentFilm, setCurentFilm] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetch = async () => {
      try {
        const film = await fetchMovieReviews(movieId);
        setCurentFilm(film.results);

        console.log(film.results);
      } catch (error) {}
    };
    fetch();
  }, [movieId]);
  if (currentFilm.length === 0) {
    return <p>Sorry we don't have any reviews for this movie</p>;
  }
  return (
    <div>
      <ul>
        {currentFilm?.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
