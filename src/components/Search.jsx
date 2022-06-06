import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { searchMovie, setLoading, addMovie } from '../store/searchSlice';
const filters = [
  {
    name: 'type',
    items: ['movie', 'series', 'episode'],
  },
  {
    name: 'number',
    items: [10, 20, 30],
  },
  {
    name: 'year',
    items: (() => {
      const years = [];
      const thisYear = new Date().getFullYear();
      for (let i = thisYear; i >= 1985; i--) {
        years.push(i);
      }
      return years;
    })(),
  },
];

const StyleForm = styled(Form)`
  display: flex;
  margin-bottom: 40px;
  select {
    width: 120px;
  }
`;
const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    title: '',
    year: '',
    type: '',
    number: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };
  const handleSearchMovies = async (e) => {
    e.preventDefault();
    dispatch(setLoading());
    const res = await axios
      .get(
        `http://www.omdbapi.com/?apikey=f6573a61&s=${search.title}&type=${search.type}&y=${search.year}&page=1`
      )
      .then((res) => res.data);
    console.log(res);
    dispatch(searchMovie(res));

    const { totalResults } = res;
    const total = parseInt(totalResults, 10);
    const pageLength = Math.ceil(total / 10);

    if (pageLength > 1) {
      for (let page = 2; page <= pageLength; page++) {
        if (page > search.number / 10) break;
        const res = await axios
          .get(
            `http://www.omdbapi.com/?apikey=f6573a61&s=${search.title}&type=${search.type}&y=${search.year}&page=${page}`
          )
          .then((res) => res.data);
        dispatch(addMovie(res));
      }
    }
  };
  return (
    <StyleForm onSubmit={handleSearchMovies}>
      <Form.Control
        placeholder='search for movie'
        onChange={handleChange}
        name='title'
      ></Form.Control>
      {filters.map((select) => {
        return (
          <Form.Select
            name={select.name}
            key={select.name}
            onChange={handleChange}
          >
            {select.name === 'year' && <option>All Years</option>}
            {select.items.map((items) => {
              return (
                <option value={items} key={items}>
                  {items}
                </option>
              );
            })}
          </Form.Select>
        );
      })}
      <Button type='submit'>Search</Button>
    </StyleForm>
  );
};

export default Search;
