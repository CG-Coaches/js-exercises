// https://www.colruyt.be/nl/lekker-koken/kibbeling-met-spinazieslaatje-en-gebakken-aardappelen

import {Recipe} from "../../model/recipe";

export function calculateRecipe(recipe: Recipe, totalPerson: number): Recipe {
  const ingredients = recipe.ingredients.map(
    ingredient => {
      const amount =  ingredient.quantity ?  ingredient.quantity / recipe.totalPerson * totalPerson : undefined
      return {...ingredient, amount}
    }
  )

  return {...recipe, ingredients, totalPerson: totalPerson}
}
