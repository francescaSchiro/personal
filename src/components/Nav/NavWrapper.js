import styled from "styled-components";

const getGradientColor = isGradientWhite => {
  if (isGradientWhite) {
    return `
    background: -moz-linear-gradient(
      top,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );`;
  } else {
    return `background: -moz-linear-gradient(
      top,
      rgba(26, 26, 26, 1) 50%,
      rgba(26, 26, 26, 0) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(26, 26, 26, 1) 50%,
      rgba(26, 26, 26, 0) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(26, 26, 26, 1) 50%,
      rgba(26, 26, 26, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a1a1a', endColorstr='#001a1a1a',GradientType=0 );`;
  }
};

const NavWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  transition: top 0.3s;
  left: 0;
  height: 90px;
  width: 100%;
  /* border: 2px solid greenyellow; */

  ${props => getGradientColor(props.isGradientWhite)};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export default NavWrapper;
