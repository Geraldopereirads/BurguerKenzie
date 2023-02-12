import styled from "styled-components";

export const StyledMainList = styled.ul`
  display: flex;

  gap: 20px;

  margin-top: 30px;
  margin-left: 20px;

  overflow-x: scroll;

  @media (min-width: 1000px){
    overflow-x: hidden;
    flex-wrap: wrap;

  }
  @media (min-width: 1400px){
    margin-left: 50px;
  }
`;
