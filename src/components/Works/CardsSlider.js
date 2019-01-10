import styled from 'styled-components';

const CardsSlider = styled.ul`

  padding: 0 10px 0 10px;
  display: block;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  height:300px;
  border: 2px solid red;

  transition: all 0.2s ease-in-out;
  margin-top:40px;

  ::-webkit-scrollbar {
    display: none;
  }

 
`;

export default CardsSlider;
