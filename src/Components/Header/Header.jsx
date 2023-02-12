import React, { useState } from "react";
import LogoBurguerKenzie from "../../assets/LogoBurguerKenzie.svg";
import { StyledHeader } from "./HeaderStyle";
export const Header = ({setSearch}) => {
const [searchValue, setSearchValue] = useState ("");

const submit = (event) => {
  event.preventDefault();
  setSearch(searchValue);
  setSearchValue ("");
}

  return (
    <StyledHeader>
      <img src={LogoBurguerKenzie} alt="" />
      <form onSubmit={submit} >
        <input placeholder="Digitar Pesquisa" type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
        <button type="submit" >Pesquisar</button>
      </form>
    </StyledHeader>
  );
};
