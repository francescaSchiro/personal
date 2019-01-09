import styled from "styled-components";
import { getMobileBreakpoint } from "../../utils";
// ${props => props.theme.font.size.sectionTitle};
const Sectiontitle = styled.p`
  /* margin-top: 50px; */
  border: 2px solid pink;
  /* width: 100%; */

  /* height:100%; */
  margin-top: 90px;
  margin-right: -20px;

  /* padding: 40px; */
  font-family: ${props => props.theme.font.family.titles};
  font-size: 20vw;
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.fontColor};
  /* position: absolute; */

  /* top: ${props => props.top};
  left: ${props => props.left}; */

  ::-moz-selection {
    /* Code for Firefox */
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.fontColor};
  }

  ::selection {
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.fontColor};
  }

  @media screen and (max-width: ${getMobileBreakpoint}) {
    /* regole CSS */
    font-size: ${props => props.theme.font.size.sectionMobile};
    
  }
  
`;

export default Sectiontitle;
