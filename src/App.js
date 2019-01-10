import React, { Component } from 'react';
import { ThemeProvider } from './theme';
import GlobalStyles from './theme/GlobalStyle';

import { themes } from './theme/index';
import { scrollToSection } from './utils';

import AppWrapper from './AppWrapper';
import NavWrapper from './components/Nav/NavWrapper';
import NavItem from './components/Nav/NavItem';
import NavItemsWrapper from './components/Nav/NavItemsWrapper';
import ButtonsWrapper from './components/Nav/ButtonsWrapper';
import ButtonTheme from './components/Nav/ButtonTheme';
import Home from './components/Home';
import About from './components/About/';
import Works from './components/Works/';
import Contacts from './components/Contacts/';

// import { getThemeByName } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.DefaultTheme,
      lightIcon: true
    };
  }
  switchToDefaultTheme = () =>
    this.setState({
      theme: themes.DefaultTheme,
      lightIcon: true
    });
  switchToDarkTheme = () =>
    this.setState({
      theme: themes.DarkTheme,
      lightIcon: false
    });

  render() {
    const { theme, lightIcon } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />
          <AppWrapper>
            <NavWrapper id='navbar' isGradientWhite={lightIcon}>
              <NavItemsWrapper>
                <NavItem
                  onClick={() => scrollToSection('.homeSection')}
                  sectionColor={props => props.theme.color.gray}
                >
                  Home /
                </NavItem>
                <NavItem
                  onClick={() => scrollToSection('.aboutSection')}
                  sectionColor={props => props.theme.color.yellow}
                >
                  About /
                </NavItem>
                <NavItem
                  onClick={() => scrollToSection('.worksSection')}
                  sectionColor={props => props.theme.color.red}
                >
                  Works /
                </NavItem>
                <NavItem
                  onClick={() => scrollToSection('.contactsSection')}
                  sectionColor={props => props.theme.color.lightBlue}
                >
                  Contacts /
                </NavItem>
              </NavItemsWrapper>
              <ButtonsWrapper>
                {lightIcon ? (
                  <ButtonTheme onClick={this.switchToDarkTheme}>
                    <i class='fas fa-lightbulb' alt='dark' />
                  </ButtonTheme>
                ) : (
                  <ButtonTheme onClick={this.switchToDefaultTheme}>
                    <i class='fas fa-lightbulb' alt='light' />
                  </ButtonTheme>
                )}
              </ButtonsWrapper>
            </NavWrapper>
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
