import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*distance from nav*/
  margin-top:30%;
  overflow:hidden;

  /* border: 2px solid rebeccapurple; */
  
  height: 275px;
  width: 300px;
  background-image: url('https://media.licdn.com/dms/image/C4D03AQGNF9uH4nl72A/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=IEwprX_4oImXhlLb8koIEn97sj8gVqdZ8W9JLDvBMQ0');
  background-size:140%;
  /* background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/280px-Tux.svg.png'); */
  background-repeat: no-repeat;
  background-position: center;
`;

export default Wrapper;
