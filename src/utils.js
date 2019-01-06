/**
 * @name - scrollToView
 * @description - function to call on nav Item Click to scroll to section
 * @param {string} classname - name of the class of the section you want to scroll to
 */
export const scrollToSection = classname => {
  document.querySelector(`${classname}`).scrollIntoView({
    behavior: "smooth"
  });
};

export const getMobileBreakpoint = () => {
  return "375px";
};

// ONLY NEED THIS if I want to make tsx files with theme interfaces. for now nope.
// import { themes } from "./theme/index";

// export const getThemeByName = name => {
//   const theme = themes[name];
//   if (!theme) {
//     console.error("Theme not found, setting default!");
//     return themes.DefaultTheme;
//   }
//   return theme;
// };
