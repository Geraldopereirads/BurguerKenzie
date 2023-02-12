import styled from "styled-components";

export const CardStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
  margin-left: 10px;
  min-width: 80vw;

  p{
    display: flex;
    gap: 10px;
  }

  img {
    width: 70px;
    height: 70px;

    background-color: var(--grey-20);
    border-radius: 5px;

    margin-left: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 97px;

    gap: 7px;
  }

  h4 {
    font-size: var(--Tittle-4);
    color: var(--gray-100);
  }

  small {
    font-size: var(--Text-2);
    color: var(--grey-50);
  }

  button {
    color: #bdbdbd;
    font-size: var(--Text-3);
    background-color: transparent;

    margin-left: 25px;
  }

  @media (min-width: 1000px){
    min-width: 30vw;

    margin-right: 10px;
  }
  @media (min-width: 1400px){
    min-width: 40vw;

    margin-right: 10px;
  }

`;


