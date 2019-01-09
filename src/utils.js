/**
 * @name - scrollToView
 * @description - function to call on nav Item Click to scroll to section
 * @param {string} classname - name of the class of the section you want to scroll to
 */
export const scrollToSection = classname => {
  document.querySelector(`${classname}`).scrollIntoView({
    behavior: 'smooth'
  });
};

export const getBreakpoint = device => {
  switch (device) {
    case 'mobile': {
      return '375px';
    }
    case 'tablet': {
      return '768px';
    } //min-width?
    case 'desktop': {
      return '2000px';
    }
    default: {
      return console.log('not given breakpoint device');
    }
  }
};

export const getBgGradient = (a, b) => {
  return ` 
 background: #f3d250;
 background: -moz-linear-gradient(top, ${a} 39%, ${b} 100%);
 background: -webkit-linear-gradient(top, ${a} 39%,${b} 100%);
 background: linear-gradient(to bottom, ${a} 39%,${b} 100%);
 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${a}', endColorstr='${b}',GradientType=0 );
 `;
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
