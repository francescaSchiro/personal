import styled, { css } from 'styled-components';
import { isIE } from '../../utils';

const SeeMore = styled.a`
  position: absolute;
  width: 75%;
  margin: 0 auto;
  display: none;
  left: 12.5%;
  bottom: 10%;
  text-shadow: 2px 2px 8px black;
  text-align: center;

  z-index: 2;

  font-family: ${props => props.theme.font.family.paragraph};
  font-size: ${props => props.theme.font.size.xxl};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.color.red};

  ::-moz-selection {
    /* Code for Firefox */
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.theme.color.red};
  }

  ::selection {
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.theme.color.red};
  }

  ${isIE
    ? css`
        display: block;
        cursor: pointer;
        z-index: 2;
      `
    : ''}
`;

export default SeeMore;

//LINK to just open: https://docdro.id/U6bDALF"
// to DOWNLOAD : https://github.com/francescaSchiro/MyFiles/blob/master/CV.pdf?raw=true
