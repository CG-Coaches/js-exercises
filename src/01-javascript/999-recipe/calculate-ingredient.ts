import {Ingredient} from "../../model/ingredient";

export function calculateIngredient(ingredient: Ingredient, totalPerson: number): number | undefined {
  if (ingredient.amount === 0) {
    return 0;
  }

  if (!ingredient.amount) {
    return undefined
  }

  return ingredient.amount * totalPerson
}
