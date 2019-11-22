import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import CommonRoute from './Route';

const { Route, Redirect } = require('dva').router;

class AuthRoute extends CommonRoute {
  state = {};

  componentWillMount() {
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    const { route } = this.props;
    const { component: Component } = route;
    return (
      <Route render={props => {
        return sessionStorage.getItem('token') ? <Component {...props} /> :
          <Redirect to={{
            pathname: '/login',
          }}/>;
      }}/>
    );
  }
}

export default AuthRoute;
