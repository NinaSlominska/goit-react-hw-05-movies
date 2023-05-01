import { fetchTrending } from 'API';
import FilmsList from 'components/FilmsList/FilmsList';
import { useEffect, useState } from 'react';

export default function Home() {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const films = await fetchTrending();
        setTrendingFilms(films.results);
      } catch (error) {}
    };
    fetch();
  }, []);
  return (
    <div>
      <h1>Trending movies</h1>
      {trendingFilms && <FilmsList films={trendingFilms} />}
    </div>
  );
}
