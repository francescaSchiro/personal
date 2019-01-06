import * as styledComponents from "styled-components";
import { merge } from "lodash";

import defaultTheme from "./default/";
import darkTheme from "./dark/";

import borders from "./borders";
import sizes from "./sizes";
import fontFamilies from "./font-families";
import fontSizes from "./font-sizes";
import fontWeights from "./font-weights";
import colors from "./colors";

const commonThemeProps = {
  size: sizes,
  border: borders,
  font: {
    family: fontFamilies,
    size: fontSizes,
    weight: fontWeights
  },
  color: colors
};

const DefaultTheme = merge({}, commonThemeProps, defaultTheme);
const DarkTheme = merge({}, commonThemeProps, darkTheme);
const themes = {
  DefaultTheme,
  DarkTheme
};

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents;

export { css, createGlobalStyle, keyframes, ThemeProvider, themes };

export default styled;
