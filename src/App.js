import React, { Component } from 'react';
import { ThemeProvider } from './theme';
import GlobalStyles from './theme/GlobalStyle';
import Fade from 'react-reveal/Fade';
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
                <Fade left>
                  <NavItem
                    type='button'
                    onClick={() => scrollToSection('.homeSection')}
                    sectionColor={props => props.theme.color.gray}
                    // href="/#home"
                  >
                    Home /
                  </NavItem>
                </Fade>
                <Fade left>
                  <NavItem
                    onClick={
                      (e => e.preventDefault(),
                      () => scrollToSection('.aboutSection'))
                    }
                    // onClick={() => scrollToSection(".aboutSection")}
                    sectionColor={props => props.theme.color.yellow}
                    // href="#about"
                  >
                    About /
                  </NavItem>
                </Fade>
                <Fade left>
                  <NavItem
                    // onClick={() => scrollToSection(".worksSection")}
                    sectionColor={props => props.theme.color.red}
                    href='#works'
                  >
                    Works /
                  </NavItem>
                </Fade>
                <Fade left>
                  <NavItem
                    type='button'
                    // onClick={() => scrollToSection(".contactsSection")}
                    sectionColor={props => props.theme.color.lightBlue}
                    href='#contacts'
                  >
                    Contacts /
                  </NavItem>
                </Fade>
              </NavItemsWrapper>
              <ButtonsWrapper>
                <Fade right>
                  {lightIcon ? (
                    <ButtonTheme onClick={this.switchToDarkTheme}>
                      <i
                        className='fas fa-lightbulb'
                        alt='dark'
                        style={{ color: '#1A1A1A', opacity: '0.7' }}
                      />
                    </ButtonTheme>
                  ) : (
                    <ButtonTheme onClick={this.switchToDefaultTheme}>
                      <i className='fas fa-lightbulb' alt='light' />
                    </ButtonTheme>
                  )}
                </Fade>
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
