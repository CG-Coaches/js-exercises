// https://www.colruyt.be/nl/lekker-koken/kibbeling-met-spinazieslaatje-en-gebakken-aardappelen

import {Recipe} from "../../model/recipe";

export function calculateRecipe(recipe: Recipe, totalPerson: number): Recipe {
  const ingredients = recipe.ingredients.map(
    ingredient => {
      const quantity =  ingredient.quantity ?  ingredient.quantity / recipe.totalPerson * totalPerson : undefined
      return {...ingredient, quantity}
    }
  )

  return {...recipe, ingredients, totalPerson: totalPerson}
}
