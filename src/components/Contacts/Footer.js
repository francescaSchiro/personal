import styled from 'styled-components';

const Footer = styled.div`
  width: 100%;
  border: 2px solid blueviolet;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top:10px;

  font-family: ${props => props.theme.font.family.paragraph};
  font-size: ${props => props.theme.font.size.m};
  color: ${props => props.theme.color.fontColor};


  @media screen and (max-width: 530px) {
    /* regole CSS */
    font-size: ${props => props.theme.font.size.xs};
  }
`;

export default Footer;
