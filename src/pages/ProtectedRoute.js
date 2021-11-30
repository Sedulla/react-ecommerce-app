import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={() => {}}></Route>;
};

export default ProtectedRoute;
