import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import About from '../About/About';
import Profile from '../Profile/Profile';

export default withRouter(({ setCurrentUser, currentUser, history }) => {

  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      currentUser
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/login' render={() => <Login history={history}
        setCurrentUser={setCurrentUser} />}
      />
      <Route path='/register' component={Register} />
      <PrivateRoute path='/profile' component={Profile} />
      <PrivateRoute path='/home' component={Home} /> 
    </Switch>
  );
});
