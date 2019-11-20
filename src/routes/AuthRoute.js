const { Route, Redirect } = require('dva').router;

const AuthRouter = (props) => {
  const { route } = props;
  const { component: Component } = route;
  return (
    <Route render={props => {
      return !sessionStorage.getItem('token') ? <Component {...props} /> : <Redirect to="/"/>;
    }}/>
  );
};

export default AuthRouter;
