import React from "react";
import { CardStyle } from "./CarrinhoCardStyle";

export const CarrinhoCard = ({ food, removeFoodCarrinho }) => {
  return (
    <CardStyle>
      <p>
        <img src={food.img} alt="Hambúrguer" />
        <div>
          <h4> {food.name} </h4>
          <small> {food.category} </small>
        </div>
      </p>
      <button onClick={() => removeFoodCarrinho(food.id)}>Remover</button>
    </CardStyle>
  );
};
