import React from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MovieItem from './MovieItem';
import Loader from './Loader';

const Wrapper = styled.div`
  background-color: #ccc;
  border-radius: 5px;
  text-align: center;
  .inner {
    background-color: #ccc;
    padding: 10px 0;
    border-radius: 5px;
    &.no-result {
      padding: 70px 0;
    }
  }
`;

const MovieListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

const MovieList = () => {
  const movies = useSelector((state) => state.searchSlice.movies);
  const response = useSelector((state) => state.searchSlice.response);
  const message = useSelector((state) => state.searchSlice.message);
  const error = useSelector((state) => state.searchSlice.error);
  const loading = useSelector((state) => state.searchSlice.loading);

  const renderMovies =
    response === 'True' ? (
      <MovieListItem>
        {movies.map((movie) => {
          return <MovieItem movie={movie} key={movie.imdbID} />;
        })}
      </MovieListItem>
    ) : (
      <div>{response === 'False' ? error : message}</div>
    );

  // console.log(movies.Search);
  return (
    <Wrapper>
      <div className={movies.length === 0 ? 'inner no-result' : 'inner'}>
        {loading ? <Loader /> : renderMovies}
      </div>
    </Wrapper>
  );
};

export default MovieList;
