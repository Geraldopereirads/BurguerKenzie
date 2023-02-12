import React from 'react'
import { FoodCard } from './FoodCard/FoodCard'
import { StyledMainList } from "./FoodListStyle";

export const FoodList = ({searchFoodList, addFoodCarrinho}) => {
  return (
    <StyledMainList>
       {searchFoodList.map(food => (
        <FoodCard key={food.id} food={food} addFoodCarrinho={addFoodCarrinho} />
       ))} 
    </StyledMainList>
  )
}
