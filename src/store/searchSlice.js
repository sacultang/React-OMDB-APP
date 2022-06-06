import { createSlice } from '@reduxjs/toolkit';
import _uniq from 'lodash/uniqBy';

export const searchSlice = createSlice({
  name: 'searchMovie',
  initialState: {
    movies: [],
    response: null,
    message: 'Search for Movies..',
    loading: null,
    error: null,
  },
  reducers: {
    searchMovie: (state, { payload }) => {
      const { Response, Search, Error } = payload;
      return {
        ...state,
        movies: _uniq(Search, 'imdbID'),
        message: null,
        response: Response,
        error: Error,
        loading: false,
      };
    },
    addMovie: (state, { payload }) => {
      const { Search } = payload;
      state.movies = [...state.movies, ..._uniq(Search, 'imdbID')];
    },
    setLoading: (state) => {
      return { ...state, loading: true };
    },
  },
});

export const { searchMovie, addMovie, setLoading } = searchSlice.actions;
export default searchSlice.reducer;
