// Components
import { Announcement } from '../components/Announcement';
import { Nav } from '../components/Nav';
import { Slider } from '../components/Slider';
import { Categories } from '../components/Categories';
import { Products } from '../components/Products';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

export const Homepage = () => {
  return (
    <>
      <Announcement />
      <Nav />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};
