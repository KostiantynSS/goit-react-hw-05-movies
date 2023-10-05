import { Outlet, NavLink } from 'react-router-dom';
import css from './layout.module.css';
import styled from 'styled-components';
import { Suspense } from 'react';
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #f22613;
  }
`;
export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.nav}>
            <li>
              <StyledLink to={'/'}>Home</StyledLink>
            </li>
            <li>
              <StyledLink to={'/movies'}>Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
