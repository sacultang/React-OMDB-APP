import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{ position: 'absolute', margin: 'auto' }}
    >
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  );
};

export default Loader;
