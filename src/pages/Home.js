import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
