// Components
import { Announcement } from '../components/Announcement';
import { Nav } from '../components/Nav';
import { Slider } from '../components/Slider';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';

export const Homepage = () => {
  return (
    <>
      <Announcement />
      <Nav />
      <Slider />
      <Products />
      <Footer />
    </>
  );
};
