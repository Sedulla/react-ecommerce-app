import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import Product from './pages/ProductPage';
import Login from './pages/Login';
import Register from './pages/Register';
// import ProtectedRoute from './pages/ProtectedRoute';

function App({ children, isAuthenticated, ...rest }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <ProtectedRoute
          exact
          path="/product"
          component={Product}
        ></ProtectedRoute> */}
      </Switch>
    </Router>
  );
}

export default App;
