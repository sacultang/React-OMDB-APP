import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
const Movie = styled(Link)`
  --width: ${200}px;
  background-image: url(${(props) => props.img});
  display: flex;
  width: var(--width);
  height: calc(var(--width) * 3 / 2);
  background-size: cover;
  border-radius: 8px;
  align-items: flex-end;
  overflow: hidden;
  text-decoration: none;
  position: relative;
  margin: 4px;
  &:hover::after {
    content: '';
    border: 6px solid #fdc000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
  }
`;

const Info = styled.div`
  background-color: rgba(#000, 0.6);
  backdrop-filter: blur(8px);
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 5px;
  div {
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const MovieItem = ({ movie }) => {
  return (
    <>
      <Movie to={`movie/${movie.imdbID}`} img={movie.Poster}>
        <Info>
          <div>{movie.Title}</div>
          <div>{movie.Year}</div>
        </Info>
      </Movie>
    </>
  );
};

export default MovieItem;
