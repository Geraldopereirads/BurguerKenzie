import styled from "styled-components";

export const StyleMainCard = styled.li`
  border-radius: 5px;
  border: solid 2px var(--grey-20);
  min-width: 200px;
  padding-bottom: 20px;

  img {
    background-color: var(--grey-0);
    height: 150px;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding-left: 15px;
    gap: 10px;
  }

  h3 {
    font-size: var(--Tittle-4);
    color: var(--gray-100);
    
  }

  small {
    font-size: var(--Text-3);
    color: var(--gray-50);
  }

  span {
    font-size: var(--Text-2);
    font-weight: bold;

    color: var(--Color-primary);
  }

  button {
    width: 100px;
    height: 40px;

    background-color: var(--Color-primary);
    color: var(--white);

    border-radius: 8px;
  }

`;
