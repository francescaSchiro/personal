import React, { Component } from 'react';
import AppWrapper from './AppWrapper';
import Nav from './components/Nav/Wrapper';
import Home from './components/Home';
import About from './components/About/';
import Works from './components/Works/';
import Contacts from './components/Contacts/';
import { ThemeProvider } from './theme';
import GlobalStyles from './theme/GlobalStyle';

// import { getThemeByName } from './utils';
import { themes } from './theme/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.DefaultTheme,
      disabledDefault: true,
      disabledDark: false
    };
  }
  switchToDefaultTheme = () =>
    this.setState({
      theme: themes.DefaultTheme,
      disabledDefault: true,
      disabledDark: false
    });
  switchToDarkTheme = () =>
    this.setState({
      theme: themes.DarkTheme,
      disabledDefault: false,
      disabledDark: true
    });

  render() {
    const { theme, disabledDefault, disabledDark } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />
          <AppWrapper>
            <Nav>
              <div>
                <span>Home / </span>
                <span>About / </span>
                <span>Works / </span>
                <span>Contacts</span>
              </div>
              <div>
                <button
                  onClick={this.switchToDefaultTheme}
                  disabled={disabledDefault}
                >
                  Default
                </button>
                <button
                  onClick={this.switchToDarkTheme}
                  disabled={disabledDark}
                >
                  Dark
                </button>
              </div>
            </Nav>
            <Home />
            <About />
            <Works />
            <Contacts />
          </AppWrapper>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
