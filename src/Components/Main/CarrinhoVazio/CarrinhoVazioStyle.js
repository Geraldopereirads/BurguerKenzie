import styled from "styled-components";

export const StyleCarrinhoVazio = styled.aside`

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;

  width: 90%;
  max-width: 100%;
  background-color: var(--grey-0);

  h3 {
    background-color: var(--Color-primary);
    color: var(--white);

    font-size: var(--Tittle-3);
    font-weight: 500;

    width: 100%;
    height: 65px;

    border-radius: 5px 8px 0px 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 20px;
  }

  p {
    font-size: var(--Tittle-3);
    font-weight: bold;

    padding-top: 50px;

    color: var(--grey-100);
  }

  small {
    color: var(--grey-50);

    font-size: var(--Text-2);

    padding-top: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: 1000px){
    width: 60%;
    margin-top: 30px;
  }

`;
