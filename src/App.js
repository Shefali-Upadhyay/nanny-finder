import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import Firebase from './Firebase';
import Heading from './components/Heading';
import Routing from './components/Routing';
import './App.css';

class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <BrowserRouter>
        <div className="py-4 main">
          <Heading user_login={user} signin={signInWithGoogle} signout={signOut}/>
          <Routing user_login={user}/>
        </div>
      </BrowserRouter>
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