import styled from "styled-components";

export const StyleTotalValue = styled.footer`
  width: 90%;
  max-width: 100%;

  background-color: var(--grey-0);
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    border-top: solid 1px var(--grey-20);
  }

  h5 {
    font-size: var(--Text-2);
    font-weight: bold;
  }

  span {
    font-size: var(--Text-2);
    color: var(--grey-50);

    margin-top: 30px;
  }

  button {
    width: 100%;
    height: 60px;
    margin: 20px auto;

    background-color: var(--grey-20);
    color: var(--grey-50);

    border-radius: 8px;
  }
`;
