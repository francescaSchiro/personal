import React, { Component } from "react";
import { ThemeProvider } from "./theme";
import GlobalStyles from "./theme/GlobalStyle";

import { themes } from "./theme/index";
import { scrollToSection } from "./utils";

import AppWrapper from "./AppWrapper";
import NavWrapper from "./components/Nav/NavWrapper";
import NavItem from "./components/Nav/NavItem";
import NavItemsWrapper from "./components/Nav/NavItemsWrapper";
import ButtonsWrapper from "./components/Nav/ButtonsWrapper";
import ButtonTheme from "./components/Nav/ButtonTheme";
import Home from "./components/Home";
import About from "./components/About/";
import Works from "./components/Works/";
import Contacts from "./components/Contacts/";

// import { getThemeByName } from './utils';

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
            <NavWrapper id="navbar" isGradientWhite={disabledDefault}>
              <NavItemsWrapper>
                <NavItem
                  onClick={() => scrollToSection(".homeSection")}
                  sectionColor={"#ececec"}
                >
                  Home /{" "}
                </NavItem>
                <NavItem
                  onClick={() => scrollToSection(".aboutSection")}
                  sectionColor={props => props.theme.color.yellow}
                >
                  About /{" "}
                </NavItem>
                <NavItem
                  onClick={() => scrollToSection(".worksSection")}
                  sectionColor={props => props.theme.color.red}
                >
                  Works /
                </NavItem>
                <NavItem
                  onClick={() => scrollToSection(".contactsSection")}
                  sectionColor={props => props.theme.color.lightBlue}
                >
                  Contacts
                </NavItem>
              </NavItemsWrapper>
              <ButtonsWrapper>
                <ButtonTheme
                  onClick={this.switchToDefaultTheme}
                  disabled={disabledDefault}
                >
                  <i className="far fa-sun" alt="light" />
                </ButtonTheme>
                <ButtonTheme
                  onClick={this.switchToDarkTheme}
                  disabled={disabledDark}
                >
                  <i className="far fa-moon" alt="dark" />
                </ButtonTheme>
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
