import styled from 'styled-components';
import { getBreakpoint } from '../../utils';

import Overlay from './Overlay';
import CardTitle from './CardTitle';
import SeeMore from './SeeMore';

const CardWrapper = styled.li`
  position: relative;
  /* margin: 0 10px 0 10px; */

  background-image: url(${props => props.coverUrl});
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
    cursor: pointer;

    z-index: 2;
  }

  &:hover ${SeeMore} {
    display: block;
    cursor: pointer;

    z-index: 2;
  }

  @media screen and (max-width: ${getBreakpoint(
      'desktop'
    )}) and (min-width: ${getBreakpoint('tablet')}) {
    width: 25vw;
    height: 25vw;
    margin: 2vw 2vw;
  }
  @media screen and (max-width: ${getBreakpoint(
      'tablet'
    )}) and (min-width: ${getBreakpoint('mobile')}) {
    width: 40vw;
    height: 40vw;
  }

  @media screen and (max-width: ${getBreakpoint('mobile')}) {
    width: 90vw;
    height: 90vw;
    display: inline-flex;
    /* center title */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 2vw;
    scroll-snap-align: start;
    
  }
`;

export default CardWrapper;
