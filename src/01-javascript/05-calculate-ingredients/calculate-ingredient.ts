import { Ingredient } from "../../model/ingredient.model";

/**
 * Return the recalculated ingredient quantity needed for a given number of servings.
 * Round off to 2 decimals.
 */
export function calculateIngredient(ingredient: Ingredient, servings: number): number | undefined {
  if (ingredient.quantity === 0) {
    return 0;
  }

  if (!ingredient.quantity) {
    return undefined;
  }

  return ingredient.quantity * servings;
}
