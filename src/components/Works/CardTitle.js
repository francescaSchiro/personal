import styled from "styled-components";

const CardTitle = styled.div`
  position:absolute;
  width:75%;
  /* margin: 0 auto; */
  display:none;
  left: 12.5%;
  bottom: 45%;
  z-index: 2;
  text-align: center;
  letter-spacing:.05em;
  
  border: 3px solid ${props=> props.theme.color.red};

  font-family: ${props => props.theme.font.family.titles};
  font-size: ${props => props.theme.font.size.xxl};
  color: white;
  padding: 5%;
  background-color: rgba(0,0,0, 0.4);
  text-shadow: 2px 2px 8px black;

  

  &:hover {
    background-color: rgba(0,0,0, 0.7);
  }

  @media only screen and (max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    background-color: rgba(0,0,0, 0.6);


    z-index: 2;
  }
  
`; 

export default CardTitle;
