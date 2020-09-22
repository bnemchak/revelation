import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import MyNavbar from '../components/MyNavbar/MyNavbar';
import ColorContainer from '../components/ColorContainer/ColorContainer';
import ManiContainer from '../components/ManiContainer/ManiContainer';

import './App.scss';

fbConnection();

class App extends React.Component {
  state ={
    authed: false,
    maniId: '0',
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  setManiContainer = (maniId) => {
    // const value = parseInt(maniId, 10);
    this.setState({ maniId });
  }

  render() {
    const { authed, maniId } = this.state;

    // eslint-disable-next-line consistent-return
    const loadComponent = () => {
      if (authed && (maniId === '0')) {
        return <ColorContainer setManiContainer={this.setManiContainer} />;
      }

      if (authed && (maniId > '0')) {
        return <ManiContainer colorId={maniId} setManiContainer={this.setManiContainer} />;
      }
    };

    return (
      <div className="App">
        <MyNavbar authed={authed} />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
