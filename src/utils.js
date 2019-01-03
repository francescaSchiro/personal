import { themes } from './theme/index';

export const getThemeByName = name => {
  const theme = themes[name];
  if (!theme) {
    console.error('Theme not found, setting default!');
    return themes.DefaultTheme;
  }
  return theme;
};
