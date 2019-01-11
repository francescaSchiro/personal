import styled from 'styled-components';
import Overlay from './Overlay';
import CardTitle from './CardTitle';

const CardWrapper = styled.li`
  position: relative;
  margin: 0 10px 0 10px;
  display: inline-flex;
  /* center title */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px; /* 100% */
  width: 300px;

  background-image: url(${props=> props.coverUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: 0;

  &:hover ${Overlay} {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 1;
  }

  &:hover ${CardTitle} {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;

    z-index: 2;
  }
`;

export default CardWrapper;
