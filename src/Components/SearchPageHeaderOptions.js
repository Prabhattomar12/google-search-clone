import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { Link } from 'react-router-dom';
import './searchPageHeaderOptions.css';

function SearchPageHeaderOptions() {
  return (
    <div className='searchPage_options'>
      <div className='searchPage_option_left'>
        <div className='searchPage_option searchPage_selected'>
          <Link to='/all'>
            <SearchIcon />
            <h3>All</h3>
          </Link>
        </div>
        <div className='searchPage_option'>
          <Link to='/videos'>
            <OndemandVideoOutlinedIcon />
            <h3>Videos</h3>
          </Link>
        </div>
        <div className='searchPage_option'>
          <Link to='/images'>
            <ImageSearchOutlinedIcon />
            <h3>Images</h3>
          </Link>
        </div>
        <div className='searchPage_option'>
          <Link to='/news'>
            <AnnouncementOutlinedIcon />
            <h3>News</h3>
          </Link>
        </div>
        <div className='searchPage_option'>
          <Link to='/shopping'>
            <LocalMallOutlinedIcon />
            <h3>Shopping</h3>
          </Link>
        </div>
      </div>
      <div className='searchPage_option_right'>
        <h3>Settings</h3>
        <h3>Tools</h3>
      </div>
    </div>
  );
}

export default SearchPageHeaderOptions;
