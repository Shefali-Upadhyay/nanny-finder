import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import Firebase from './Firebase';
import Home from './components/Home';
import Modify from './components/Modify';
import Add from './components/Add';
import './App.css';

class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <Router>
        <div className="py-4 main">
          <h1 className="text-center">ONE PLACE TO FIND YOU HELP!!</h1>
          <div className="py-4 text-center">
            {
            user
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
            }
            {
            user
            ? <button className="btn btn-primary" onClick={signOut}>Sign out</button>
            : <button className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google</button>
            }
          </div>
          <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
          <h1 className="navbar-brand mt-2">FINDING NANNY</h1>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link to={'/'} className="nav-link"> Home </Link></li>
              <li className="nav-item"><Link to={'/add'} className="nav-link">Add</Link></li>
              <li className="nav-item"><Link to={'/modify'} className="nav-link">Modify</Link></li>
            </ul>
          </nav>
          <Switch>
            <React.Fragment>
              <Route exact path='/' component={Home} />
              {
              user
              ? <Route path='/add' component={Add} />
              : <div className="alert alert-danger">
                  <strong>Sign In Required!</strong>
                </div>
              }
              {
              user
              ? <Route path='/modify' component={Modify} />
              : <div className="alert alert-danger">
                  <strong>Sign In Required!</strong>
                </div>
              }
              </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

const firebaseAppAuth = Firebase.auth();
const providers = {
  googleProvider: new Firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);