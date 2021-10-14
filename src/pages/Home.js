import React from 'react';
import Nav from '../components/Nav';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Nav />
      <Slider />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
