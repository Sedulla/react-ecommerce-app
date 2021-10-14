import React from 'react';
import Nav from '../components/Nav';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Announcement from '../components/Announcement';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Nav />
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
