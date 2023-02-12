import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 30px;

  max-width: 100%;
  width: 100%;
  height: 139px;

  background-color: var(--grey-0);
  img {
    width: 160px;
    height: 40px;
  }

  form {
    max-width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
  }

  input {
    min-width: 97%;
    height: 50px;
    position: relative;

    border-radius: 8px;
    border: solid 2px var(--grey-20);

    color: var(--grey-20);

    padding-left: 10px;
    left: 9px;
  }

  button {
    position: relative;
    left: -74px;

    width: 110px;
    height: 40px;

    border-radius: 8px;

    background-color: var(--Color-primary);
    color: var(--white);

    padding: 5px 5px;
  }

  @media (min-width: 1000px){
    justify-content: space-between;
    flex-direction: row;

    padding-left: 50px;
    padding-right: 50px;
  }
`;
