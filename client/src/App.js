import { Routes, Route, Navigate } from 'react-router-dom';

// Pages and components
import { Homepage } from './views/Homepage';
import { SingleProduct } from './views/SingleProduct';
import { ProductList } from './views/ProductList';
import { Cart } from './views/Cart';
import { LogIn } from './views/LogIn';
import { SignUp } from './views/SignUp';
// import ProtectedRoute from './pages/ProtectedRoute';

export const App = () => {
  const user = true;

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <LogIn />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" replace /> : <SignUp />}
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
};
