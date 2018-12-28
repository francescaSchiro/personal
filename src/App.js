import React, { Component } from 'react';
import AppWrapper from './AppWrapper';
import Home from './components/Home';
import About from './components/About/';
import Works from './components/Works/';
import Contacts from './components/Contacts/';


class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Home/>
        <About />
        <Works />
        <Contacts />
      </AppWrapper>
    );
  }
}

export default App;
