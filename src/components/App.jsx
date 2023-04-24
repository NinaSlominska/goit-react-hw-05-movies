import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const Layout = lazy(() => import('components/Layout/Layout'));
  const Home = lazy(() => import('pages/Home'));
  const Movies = lazy(() => import('pages/Movies'));
  const MovieDetails = lazy(() => import('pages/MovieDetails'));
  const Cast = lazy(() => import('components/MovieInfo/Cast'));
  const Reviews = lazy(() => import('components/MovieInfo/Reviews'));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
