import styled from 'styled-components';

// import { getBgGradient } from '../../utils';
/* ${props => getBgGradient(props.theme.color.red, props.theme.color.blue)}; */

const Wrapper = styled.div`
  /* height:100%; */
  /* min-height: 100%; */
  width: 100%;
  border: 2px solid var(--red);
  /* scroll-snap-align: start; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Wrapper;
