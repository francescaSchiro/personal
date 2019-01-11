import styled from "styled-components";

const SeeMore = styled.a`
display:none;
/* all:unset; */
position: absolute;
 bottom:10vw;

z-index:2;

  font-family: ${props => props.theme.font.family.paragraph};
  font-size: ${props => props.theme.font.size.xl};
  font-weight: ${props => props.theme.font.weight.normal};
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
`;

export default SeeMore;

//LINK to just open: https://docdro.id/U6bDALF"
// to DOWNLOAD : https://github.com/francescaSchiro/MyFiles/blob/master/CV.pdf?raw=true
