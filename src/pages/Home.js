import Nav from '../components/Nav';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Nav />
      <Slider />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
