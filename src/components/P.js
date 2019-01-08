import styled from "styled-components";

const P = styled.p`
  width: 50%;
  font-family: ${props => props.theme.font.family.paragraph};
  font-size: ${props => props.theme.font.size.xl};
  color: ${props => props.theme.color.fontColor};
  line-height: 1.3em;
  border: 2px solid blue;
  margin: 40px 40px 0 0;
  @media screen and (max-width: 600px) {
    /* regole CSS */
    font-size: ${props => props.theme.font.size.l};
    line-height: 1.3em;
    width: 75%;
  }

  ::-moz-selection {
    /* Code for Firefox */
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.theme.color.fontColor};
  }

  ::selection {
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.theme.color.fontColor};
  }
`;

export default P;
