import { PureComponent } from 'react';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const { Route } = require('dva').router;


export default class CommonRoute extends PureComponent {
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
      <Route render={props => <Component {...props} />}/>
    );
  }
}
