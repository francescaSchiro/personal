import styled from 'styled-components';
// import Overlay from './Overlay';
// import CardTitle from './CardTitle';

const Card= styled.div`
  height: 200px;
  width: 100%;

  color:${props => props.theme.color.fontColor};


  background-image: url(${props => props.coverUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Card;

// z-index: 0;

// &:hover ${Overlay} {
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   z-index: 1;
// }

// &:hover ${CardTitle} {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor:pointer;

//   z-index: 2;