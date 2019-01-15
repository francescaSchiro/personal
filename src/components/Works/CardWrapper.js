import styled from 'styled-components';
import { getBreakpoint } from '../../utils';

import Overlay from './Overlay';
import CardTitle from './CardTitle';
import SeeMore from './SeeMore';
import CSub from './CSub';

const CardWrapper = styled.li`
  position: relative;
  width: 25vw;
  height: 25vw;

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

  &:hover ${CSub} {
    display: block;
    cursor: pointer;

    z-index: 2;
  }

  @media screen and (min-width: ${getBreakpoint('tablet')}) {
    /* width: 30vw;
      height: 30vw;
      margin: 1vw ; */

    /* prova */
    width: 25vw;
    height: 25vw;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 2vw;
    /* scroll-snap-align: start; */
  }
  @media screen and (max-width: ${getBreakpoint(
      'tablet'
    )}) and (min-width: 600px) {
    width: 40vw;
    height: 40vw;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 2vw;
    /* scroll-snap-align: start; */
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
    height: 90vw;
    display: inline-flex;
    /* center title */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 2vw;
    /* scroll-snap-align: start; */
  }
`;

export default CardWrapper;
