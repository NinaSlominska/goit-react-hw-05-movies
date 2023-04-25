import { fetchMoviesByName } from 'API';
import FilmsList from 'components/FilmsList/FilmsList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [found, setFound] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilm = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!currentFilm) {
      return;
    }
    const fetch = async () => {
      try {
        const film = await fetchMoviesByName(currentFilm);
        setFound(film.results);
      } catch (error) {}
    };
    fetch();
  }, [currentFilm]);
  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {found && <FilmsList films={found} />}
    </div>
  );
}
