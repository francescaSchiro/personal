import styled from 'styled-components';

const Wrapper = styled.div`
  z-index:100;
  position: fixed;
  top:0;
  left:0;
  height: 100px;
  width: 100%;
  border: 2px solid greenyellow;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default Wrapper;
