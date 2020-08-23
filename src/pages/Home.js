import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <Link to='/images'>Images</Link>
          <Link to='/gmail'>Gmail</Link>
        </div>
      </div>
      <div className='home__body'></div>
    </div>
  );
};

export default Home;
