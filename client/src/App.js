import { Routes, Route } from 'react-router-dom';

// Pages and components
import { Homepage } from './views/Homepage';
import { LogIn } from './views/LogIn';
import { SignUp } from './views/SignUp';
import { SingleProduct } from './views/SingleProduct';
import { ProductList } from './views/ProductList';
import { Cart } from './views/Cart';
// import ProtectedRoute from './pages/ProtectedRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/collection" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
};
