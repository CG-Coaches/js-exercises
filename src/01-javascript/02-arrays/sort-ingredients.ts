import { Ingredient } from '../../model/ingredient.model';

/**
 * Given an array of ingredients,
 * return this array of ingredients sorted by name (case insensitive).
 *
 * Make sure you are writing a "pure function".
 */
export function sortIngredients(ingredients: Ingredient[]): Ingredient[] {
  return ingredients.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
}
