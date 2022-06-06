import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Skeleton, Wrapper, MovieDetail } from '../style/MovieStyle';
import Loader from '../components/Loader';
const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const data = await axios
        .get(`http://www.omdbapi.com/?apikey=f6573a61&i=${params.id}`)
        .then((res) => res.data);
      setMovie(data);
    }
    fetchMovie();
  }, []);

  const imgSize = (url, size = 700) => {
    const src = url.replace('SX300', `SX${size}`);
    return src;
  };
  // console.log(movie);
  return (
    <Wrapper>
      {Object.keys(movie).length === 0 ? (
        <Skeleton>
          <div className='skeleton poster'></div>
          <div className='specs'>
            <div className='skeleton title'></div>
            <div className='skeleton spec'></div>
            <div className='skeleton plot'></div>
            <div className='skeleton etc'></div>
            <div className='skeleton etc'></div>
            <div className='skeleton etc'></div>
          </div>
          <Loader />
        </Skeleton>
      ) : (
        <MovieDetail>
          <div
            className='poster'
            style={{ backgroundImage: `url(${imgSize(movie.Poster)})` }}
          ></div>

          <div className='specs'>
            <div className='title'>{movie.Title}</div>
            <div className='labels'>
              <span>{movie.Released}</span>
              <span>{movie.Runtime}</span>
              <span>{movie.Country}</span>
            </div>
            <div className='plot'>{movie.Plot}</div>
            <div className='ratings'>
              <h3>Ratings</h3>
              <div className='rating-wrap'>
                {movie.Ratings.map(({ Source: name, Value: score }) => {
                  return (
                    <div key={name} className='rating'>
                      <img
                        src={`https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${name}.png`}
                        alt=''
                      />
                      <span>{score}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h3>Actors</h3>
              {movie.Actors}
            </div>
            <div>
              <h3>Director</h3>
              {movie.Director}
            </div>
            <div>
              <h3>Genre</h3>
              {movie.Genre}
            </div>
          </div>
        </MovieDetail>
      )}
    </Wrapper>
  );
};

export default Movie;
