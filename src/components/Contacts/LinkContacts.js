import styled from "styled-components";

const LinkContacts = styled.a`
  padding: 20px;

  font-family: ${props => props.theme.font.family.paragraph};
  font-size: ${props => props.theme.font.size.xxl};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.sectionColor};

  ::-moz-selection {
    /* Code for Firefox */
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.sectionColor};
  }

  ::selection {
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.sectionColor};
  }
`;

export default LinkContacts;

//LINK to just open: https://docdro.id/U6bDALF"
// to DOWNLOAD : https://github.com/francescaSchiro/MyFiles/blob/master/CV.pdf?raw=true
