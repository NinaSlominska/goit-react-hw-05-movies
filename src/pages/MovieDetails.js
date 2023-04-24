import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieId } from 'API';
import MovieInfo from 'components/MovieInfo/MovieInfo';
export default function MovieDetails() {
  const [currentFilm, setCurentFilm] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        const film = await fetchMovieId(movieId);
        setCurentFilm(film);
      } catch (error) {}
    };
    fetch();
  }, [movieId]);

  return (
    <div>
      <MovieInfo currentFilm={currentFilm} />
    </div>
  );
}
