import React, { useState } from 'react';
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

const App = () => {
  const [theme, setTheme] = useState(themes.DefaultTheme);
  const [lightIcon, setLightIcon] = useState(true);
 
  const switchToDefaultTheme = () => {
    setTheme(themes.DefaultTheme);
    setLightIcon(true);
  }
  const switchToDarkTheme = () => {
    setTheme(themes.DarkTheme);
    setLightIcon(false);
  }
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
                    sectionColor={theme.color.gray}
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
                    sectionColor={theme.color.yellow}
                  >
                    About /
                  </NavItem>
                </Fade>
                <Fade left>
                  <NavItem
                    // onClick={() => scrollToSection(".worksSection")}
                    sectionColor={theme.color.red}
                    href='#works'
                  >
                    Works /
                  </NavItem>
                </Fade>
                <Fade left>
                  <NavItem
                    type='button'
                    sectionColor={theme.color.lightBlue}
                    href='#contacts'
                  >
                    Contacts /
                  </NavItem>
                </Fade>
              </NavItemsWrapper>
              <ButtonsWrapper>
                <Fade right>
                  {lightIcon ? (
                    <ButtonTheme onClick={switchToDarkTheme}>
                      <i
                        className='fas fa-lightbulb'
                        alt='dark'
                        style={{ color: '#1A1A1A', opacity: '0.7' }}
                      />
                    </ButtonTheme>
                  ) : (
                    <ButtonTheme onClick={switchToDefaultTheme}>
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

export default App;
