import React from "react";
import { CarrinhoCard } from "./CarrinhoCard/CarrinhoCard";
import { TotalValue } from "./TotalValue/TotalValue";
import { StyleFullCar } from "./CarrinhoCheioStyle";

export const CarrinhoCheio = ({ foodListCarrinho, removeFoodCarrinho, removeAllFoods }) => {
  return (
    <StyleFullCar>
      <h3>Carrinho de compras</h3>

      <ul>
        {foodListCarrinho.map (food => (
            <CarrinhoCard key={food.id} food={food} removeFoodCarrinho={removeFoodCarrinho}/>
        ))}
      </ul>
      <TotalValue foodListCarrinho={foodListCarrinho} removeAllFoods={removeAllFoods}/>
    </StyleFullCar>
  );
};
