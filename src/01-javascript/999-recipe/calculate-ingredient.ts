import {Ingredient} from "../../model/ingredient";

export function calculateIngredient(ingredient: Ingredient, totalPerson: number): number | undefined {
  if (ingredient.quantity === 0) {
    return 0;
  }

  if (!ingredient.quantity) {
    return undefined
  }

  return ingredient.quantity * totalPerson
}
