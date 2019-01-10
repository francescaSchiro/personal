import styled from 'styled-components';

const CSub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  font-family: ${props => props.theme.font.family.titles};
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

export default CSub;
