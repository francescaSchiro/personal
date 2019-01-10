import styled from 'styled-components';

const Cover = styled.div`
  height: 200px;
  width: 300px;
  background-image: url(${props => props.coverUrl});

`;

export default Cover;
