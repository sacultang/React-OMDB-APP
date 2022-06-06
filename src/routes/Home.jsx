import React from 'react';
import Search from '../components/Search';
import MovieList from '../components/MovieList';
import { Wrapper } from '../style/MovieStyle';

const Home = () => {
  return (
    <Wrapper>
      <Search />
      <MovieList />
    </Wrapper>
  );
};

export default Home;
