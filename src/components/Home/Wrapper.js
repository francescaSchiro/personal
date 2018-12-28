import styled from 'styled-components';

const Wrapper = styled.div`
  /* height:100%; */
  /* height: 100vh; */
  height: 100vh;
  min-height: 100%;
  width: 100%;
  border: 2px solid black;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default Wrapper;
