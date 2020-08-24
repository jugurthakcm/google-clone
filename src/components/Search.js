import React, { useState } from 'react';
import './Search.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

function Search() {
  const [input, setInput] = useState('');

  const search = (e) => {
    e.preventDefault();
  };
  return (
    <div className='search'>
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      <div className='search__buttons'>
        <Button onClick={search} variant='outlined'>
          Google Search
        </Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>
      </div>
    </div>
  );
}

export default Search;
