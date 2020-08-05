import styled from 'styled-components'


export const StyledContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-areas: "left middle right";
  justify-content: center;
  align-content: center;
  margin-top: 0em;
  padding-top: 0em;
`;

export const StyledWrapper = styled.div`
  width: 60%;
  justify-content: center;
  align-content: center;
  margin-left: 20%;
  box-shadow: 10px 10px 55px 44px rgba(0,0,0,0.75);  
  border-radius: 10px;
  `;