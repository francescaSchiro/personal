import styled from "styled-components";
import { getBreakpoint } from "../utils";


const Sectiontitle = styled.p`
  margin: ${props=> props.margins};

  font-family: ${props => props.theme.font.family.titles};
  font-size:  ${props => props.theme.font.size.sectionMobile};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.sectionColor};
  border: 2px solid pink;
  /* position: absolute; */

  ::-moz-selection {
    /* Code for Firefox */
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.sectionColor};
  }

  ::selection {
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.sectionColor};
  }

  @media screen and (max-width: ${getBreakpoint('desktop')} ) and (min-width: ${getBreakpoint('tablet')})  {
    font-size: ${props => props.theme.font.size.sectionTitleDesktop};  
  }
  @media screen and (max-width: ${getBreakpoint('tablet')})  and (min-width: ${getBreakpoint('mobile')}) {
    font-size: ${props => props.theme.font.size.sectionTitleTablet};
    
  }
  @media screen and (max-width: ${getBreakpoint('mobile')}) {
    font-size: ${props => props.theme.font.size.sectionTitleMobile};
    
  }
`;

export default Sectiontitle;