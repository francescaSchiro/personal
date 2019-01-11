import styled from "styled-components";

const H1 = styled.p`
  font-family: ${props =>
    props.home
      ? props.theme.font.family.paragraph
      : props.theme.font.family.titles};
  font-size: ${props => props.theme.font.size.xxl};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.color.fontColor};

  ::-moz-selection {
    /* Code for Firefox */
    color: ${props => props.theme.color.darkGray};
    background: ${props => props.sectionColor};
  }

  ::selection {
    color: ${props => props.theme.color.darkGray};
    background: ${props => props.sectionColor};
  }
`;

export default H1;
