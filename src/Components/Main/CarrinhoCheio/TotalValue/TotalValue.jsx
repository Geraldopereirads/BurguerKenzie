import React from 'react'
import { StyleTotalValue } from "./TotalValueStyle";

export const TotalValue = ({foodListCarrinho, removeAllFoods}) => {

   const total = foodListCarrinho.reduce((accumulator, currentFood) => {
          return accumulator + Number(currentFood.price);
      }, 0);
  return (
    <StyleTotalValue>
        <div>
            <h5>Total</h5>
            <span>{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
        </div>
        <button onClick={() => removeAllFoods()}>Remover todos</button>
    </StyleTotalValue>
  )
}
