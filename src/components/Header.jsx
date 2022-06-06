import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from '../style/MovieStyle';

const HeaderBtn = styled.div`
  a {
    color: royalblue;
    margin-right: 10px;
    &.active {
      background-color: royalblue;
      color: white;
    }
  }
`;
const navgitation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Movie',
    href: '/movie/tt2294629',
    path: /^\/movie/,
  },
];

const Header = () => {
  const location = useLocation();
  const isMatch = (path) => {
    if (!path) return;
    return path.test(location.pathname);
  };
  return (
    <Wrapper>
      <HeaderBtn>
        {navgitation.map((item) => {
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={isMatch(item.path) ? 'active btn' : 'btn'}
            >
              {item.name}
            </NavLink>
          );
        })}
      </HeaderBtn>
    </Wrapper>
  );
};

export default Header;
