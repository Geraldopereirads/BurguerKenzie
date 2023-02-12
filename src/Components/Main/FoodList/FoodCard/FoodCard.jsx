import React from 'react'
import { StyleMainCard } from "./FoodCardStyle";

export const FoodCard = ({food, addFoodCarrinho}) => {
return (
    <StyleMainCard >
        <img src={food.img} alt="Hambúrguer" />
        <div>
        <h3> {food.name} </h3>
        <small> {food.category} </small>
        <span> R$ {food.price} </span>
        <button onClick={() => addFoodCarrinho(food)} >Adicionar</button>
        </div>
    </StyleMainCard>
)
}
