import styled, { css } from 'styled-components';
import { isIE } from '../../utils';

const CardTitle = styled.div`
  text-decoration: none;
  position: absolute;
  width: 75%;
  /* margin: 0 auto; */
  /* display:none; */
  left: 12.5%;
  bottom: 45%;
  /* z-index: 2; */
  text-align: center;
  letter-spacing: 0.05em;

  border: 3px solid ${props => props.theme.color.red};

  font-family: ${props => props.theme.font.family.titles};
  font-weight: ${props => props.theme.font.weight.bold};
  font-size: ${props => props.theme.font.size.xl};
  color: white;
  padding: 5%;
  /* background-color: rgba(0, 0, 0, 0.4); */
  text-shadow: 2px 2px 8px black;

  /* see if it works on ipad */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  ${isIE
    ? css`
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        z-index: 2;
      `
    : ''}
`;

export default CardTitle;
