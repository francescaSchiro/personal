import styled, { css } from "styled-components";
import { checkIfAppleDevice } from '../../utils';

const LinkWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${props => props.mail
  ? css`
      &::before {
      content:'Don\'t be shy';
      height: 100%;
      width: 100%; 
      }`
    : ''
  }

  ${checkIfAppleDevice
    ? ""
    : css`
        &:hover > * {
          color: ${props => props.theme.color.blue};
        }
      `}
`;

export default LinkWrapper;
