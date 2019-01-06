import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*distance from nav*/
  margin-top: 15vh;
  /*overflow: hidden;*/

  /* border: 2px solid rebeccapurple; */

  height: 275px;
  width: 300px;

  /* gradient animation */
  background-image: linear-gradient(137deg, #f78888, #f3d250, #5da2d5);
  background-size: 600% 600%;
  -webkit-animation: gradientTransition 10s ease infinite;
  -moz-animation: gradientTransition 10s ease infinite;
  animation: gradientTransition 10s ease infinite;
  @-webkit-keyframes gradientTransition {
    0% {
      background-position: 4% 0%;
    }
    50% {
      background-position: 97% 100%;
    }
    100% {
      background-position: 4% 0%;
    }
  }
  @-moz-keyframes gradientTransition {
    0% {
      background-position: 4% 0%;
    }
    50% {
      background-position: 97% 100%;
    }
    100% {
      background-position: 4% 0%;
    }
  }
  @keyframes gradientTransition {
    0% {
      background-position: 4% 0%;
    }
    50% {
      background-position: 97% 100%;
    }
    100% {
      background-position: 4% 0%;
    }
  }

  @media screen and (max-width: 400px) {
    margin-top: 15vh;
  }
`;

export default Wrapper;
/*background-image: url("https://media.licdn.com/dms/image/C4D03AQGNF9uH4nl72A/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=IEwprX_4oImXhlLb8koIEn97sj8gVqdZ8W9JLDvBMQ0");
background-size: 140%;
background-repeat: no-repeat;
background-position: center; */
