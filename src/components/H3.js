import styled from 'styled-components';

const H3 = styled.p`
  margin-top: 16px;
  font-family: ${props => props.theme.font.family.paragraph};
  font-size: ${props => props.theme.font.size.xl};
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

export default H3;
