import styled, { css } from "styled-components";
import { getBreakpoint, isIE } from '../../utils';


const CSub = styled.div`

position: absolute;
  display: none;
  left:0;
  bottom: 20%;
  white-space: pre-wrap;
  line-height: 1.2em;

  z-index: 2;
  text-align: center;
  padding: 10px;
  text-shadow: 2px 2px 8px black;

  font-family: ${props => props.theme.font.family.paragraph};
  font-size: ${props => props.theme.font.size.xl};
  color: white;

  @media screen and (max-width: ${getBreakpoint('desktop')} ) and (min-width: ${getBreakpoint('tablet')})  {
    width: 25vw;
    font-size: ${props => props.theme.font.size.l};

    /* height: 25vw; */
    
  }
  @media screen and (max-width: ${getBreakpoint('tablet')})  and (min-width:600px) {
    width: 40vw;
    /* height: 40vw; */
  }
    
  @media screen and (max-width: 600px) {
    width: 90vw;
    /* height: 90vw; */
  }

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


export default CSub;
