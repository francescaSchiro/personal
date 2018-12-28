import styled from 'styled-components';

const BackgroundImg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/280px-Tux.svg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index:-10;
  /* more stable?
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  */
`;

export default BackgroundImg;
