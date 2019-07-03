import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import PrivateRoute from './PrivateRoute';
import Loader from '../components/Loader';

import { deleteToken } from '../helpers/auth';

const lazyLoadedPage = path =>
  Loadable({
    loader: () => import('../pages/' + path),
    loading: () => <Loader />
  });

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={lazyLoadedPage('Home')} />
    <Route exact path="/login" component={lazyLoadedPage('Login')} />
    <PrivateRoute
      exact
      path="/dragon/:categoryId"
      component={lazyLoadedPage('Detail')}
    />
    <PrivateRoute
      exact
      path="/logout"
      component={({ location }) => {
        deleteToken();
        return (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    />
    <Route exact path="*" component={lazyLoadedPage('Home')} />
  </Switch>
);

export default Routes;
