import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Modify from './Modify';
import Add from './Add';
import '../App.css';

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}


class Routing extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute authed={this.props.user_login} path='/add' component={Add} />
        <PrivateRoute authed={this.props.user_login} path='/modify' component={Modify} />
      </Switch>
    );
  }
}

export default Routing;