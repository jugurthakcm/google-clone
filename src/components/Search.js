import React, { useState } from 'react';
import './Search.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../data/StateProvider';
import { actionTypes } from '../data/reducer';

function Search({ hideButtons }) {
  const [state, dispatch] = useStateValue();

  const [input, setInput] = useState('');
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.SET_SEARCH_TERM, term: input });
    history.push('/search');
  };

  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className='search__buttons'>
          <Button type='submit' onClick={search} variant='outlined'>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            type='submit'
            className='search__buttonHidden'
            onClick={search}
            variant='outlined'
          >
            Google Search
          </Button>
          <Button variant='outlined' className='search__buttonHidden'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
