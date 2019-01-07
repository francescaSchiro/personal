import styled from "styled-components";

const Sectiontitle = styled.p`
  /* margin-top: 50px; */
  border: 2px solid pink;
  width: 100%;

  /* height:100%; */
  /* margin-top: 40px; */
  /* padding: 40px; */
  font-family: ${props => props.theme.font.family.titles};
  font-size: ${props => props.theme.font.size.sectionTitle};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.fontColor};
  position: absolute;

  top: ${props => props.top};
  left: ${props => props.left};

  ::-moz-selection {
    /* Code for Firefox */
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.fontColor};
  }

  ::selection {
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.fontColor};
  }
`;

export default Sectiontitle;