import { Suspense, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export default function MovieInfo({ currentFilm }) {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    currentFilm;
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  return (
    <>
      <NavLink to={backLink.current}state={{from:location}}>Go back</NavLink>
      <div>
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
      </div>
      <div>
        <h3>Additional information</h3>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
