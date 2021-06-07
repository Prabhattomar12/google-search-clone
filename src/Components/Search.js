import React, { useState } from 'react';
import './search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDataLayerValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hidebuttons }) {
  const [input, setInput] = useState('');
  const [{ term }, dispatch] = useDataLayerValue();
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push('/search');
    setInput('');
  };
  console.log('term ', term);
  return (
    <form className='search'>
      <div className='search_input'>
        <SearchIcon className='search_icon' />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className='mic_icon' />
      </div>

      {!hidebuttons ? (
        <div className='search_buttons'>
          <button onClick={search} type='submit'>
            Google Search
          </button>
          <button>I'm Feeling Lucky</button>
        </div>
      ) : (
        <div className='search_buttons'>
          <button
            className='search_button_hidden'
            onClick={search}
            type='submit'
          >
            Google Search
          </button>
          <button className='search_button_hidden'>I'm Feeling Lucky</button>
        </div>
      )}
    </form>
  );
}

export default Search;

// api key
// Context key
