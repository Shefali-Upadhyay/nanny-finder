import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Modify from './Modify';
import Add from './Add';
import '../App.css';

class Routing extends Component {

  render() {
    return (
      <Switch>
        <React.Fragment>
          <Route exact path='/' component={Home} />
          {
            this.props.user_login
            ? (
              <div>
                <Route path='/add' component={Add} />
                <Route path='/modify' component={Modify} />
              </div>
              )
            : <div className="alert alert-danger">
                <strong>Sign In Required!</strong>
              </div>
          }
        </React.Fragment>
      </Switch>
    );
  }
}

export default Routing;