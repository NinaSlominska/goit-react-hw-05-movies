import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Container, Header, NavStyled } from './Layout.styled';

export default function Layout() {
  return (
    <Container>
      <Header>
        <NavStyled>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </NavStyled>
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}
