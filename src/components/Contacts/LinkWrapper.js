import styled, { css } from 'styled-components';
import { checkIfAppleDevice, isIE } from '../../utils';

const LinkWrapper = styled.div`
position:relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.lightBlue};
  margin-left: ${props => props.mail ? '120px' : 0};

  /* before Don't be shy element */
  ${props =>
    props.mail
      ? css`
          &::before {
            content: "Don't be shy";
            position:absolute;
            display:flex;
            flex-direction:row;
            justify-content: center;
            align-items:center;
            padding: 5px 5px;
            bottom: ${ isIE ? '5px;' : '' };
            left:-100px; 
            /* text-transform:uppercase; */
            color: ${props=> props.theme.color.backgroundColor}
            background-color: ${props => props.theme.color.blue};
            font-family: ${props=> props.theme.font.family.titles};
            font-size: ${props=> props.theme.font.size.m};
            letter-spacing: .1em;
            /* border: 2px solid red; */
            border-radius: 3px;
            height: 50px;
            width:120px;
            transition:all .7s ease-in-out;
          }
          &:hover::before {
              transform: translateX(-15px);
            }
        `
      : ''}

/* icon style */
  & > i {
    font-size: 40px;
  }

/* hover effect NOT on Apple Devices */
  ${(checkIfAppleDevice)
    ? ''
    : css`
        &:hover > * {
          color: ${props => props.theme.color.blue};
        }
      `}
`;

export default LinkWrapper;
