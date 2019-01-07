import styled from 'styled-components';

// import { getBgGradient } from '../../utils';
/* ${props => getBgGradient(props.theme.color.blue, props.theme.color.backgroundColor)}; */

const Wrapper = styled.div`
  /* height:100%; */
  min-height: 100%;
  width: 100%;
  border: 2px solid var(--blue);
  /* scroll-snap-align: start; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Wrapper;
