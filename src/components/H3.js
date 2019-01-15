import styled from 'styled-components';

const H3 = styled.p`
  margin: ${props => (props.contacts ? '0 40px 0 0' : '16px 0 0 0')};
  padding: ${props => (props.contacts ? '20px' : '0')};
  font-family: ${props => props.theme.font.family.paragraph};
  font-size: ${props => props.theme.font.size.xl};
  color: ${props => props.theme.color.fontColor};
  text-align: center;

  @media screen and (max-width: 800px) {
    margin: ${props => (props.contacts ? '0' : '16px 0 0 0')};
    font-size: ${props => props.contacts ?  props.theme.font.size.l : props.theme.font.size.xl};
  }

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
