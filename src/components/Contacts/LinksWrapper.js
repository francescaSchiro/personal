import styled from 'styled-components';

const LinksWrapper = styled.div`
  width: 100vw;
  /* height:100%; */
  /* flex:1; */
  /* border: 2px solid black; */
  white-space: pre-wrap;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 30px 0 30px ;
  margin:  30px 0 30px 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:  0 0 20px 0;
  }
`;

export default LinksWrapper;
