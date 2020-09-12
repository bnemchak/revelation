/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../Auth/Auth';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Revelation</a>
        <a className="nav-item nav-link" href="/">Collection</a>
        <a className="nav-item nav-link" href="/">Manicures</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {
              authed
                ? <button className="nav-link btn btn-primary text-dark logout-button" onClick={this.logoutClickEvent}> Logout</button>
                : <Auth />
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default MyNavbar;
