import styled, { css } from 'styled-components';

const Link = styled.a`
  padding: 20px;

  font-family: ${props => props.theme.font.family.paragraph};
  font-size: ${props => props.theme.font.size.xxl};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.sectionColor};

  /* for IE11 and IE10 */
  touch-action: manipulation;
  -ms-touch-action: manipulation;

  ::-moz-selection {
    /* Code for Firefox */
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.sectionColor};
  }

  ::selection {
    color: ${props => props.theme.color.backgroundColor};
    background: ${props => props.sectionColor};
  }

  ${props =>
    props.about
      ? css`
          &:hover {
            color: ${props => props.theme.color.darkYellow};
          }
        `
      : ''}
`;

export default Link;

