import { Recipe } from "../../model/recipe.model";

/**
 * Recalculates the quantities of the ingredients necessary for a given number of servings.
 */
export function calculateRecipe(recipe: Recipe, servings: number): Recipe {
  const ingredients = recipe.ingredients.map(
    ingredient => {
      const quantity = ingredient.quantity ? ingredient.quantity / recipe.servings * servings : undefined
      return {...ingredient, quantity}
    }
  )

  return {...recipe, ingredients, servings: servings}
}
