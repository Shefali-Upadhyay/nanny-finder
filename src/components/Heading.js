import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Heading extends Component {

  render() {
    return (
      <div>
        <h1 className="text-center">ONE PLACE TO FIND YOU HELP!!</h1>
        <div className="py-4 text-center">
          {
            this.props.user_login
            ? <p>Hello, {this.props.user_login.displayName}</p>
            : <p>Please sign in.</p>
          }
          {
            this.props.user_login
            ? <button className="btn btn-primary" onClick={this.props.signout}>Sign out</button>
            : <button className="btn btn-primary" onClick={this.props.signin}>Sign in with Google</button>
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
      </div>
    );
  }
}

export default Heading;