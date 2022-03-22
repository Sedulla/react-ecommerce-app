import { Routes, Route } from 'react-router-dom';
import { Homepage } from './app/views/Homepage';
// import Product from './pages/ProductPage';
import { LogIn } from './app/views/LogIn';
import { SignUp } from './app/views/SignUp';
// import ProtectedRoute from './pages/ProtectedRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" />
      </Routes>
    </>
  );
};
