import {calculateRecipe} from "./calculate-recipe";
import {kibbeling, peper, recipe} from "../../data/recipe";

describe('calculateRecipe', () => {

  test.each`
  recipe    | servings    | expected
  ${recipe} | ${1} | ${1}
  ${recipe} | ${2} | ${2}
  ${recipe} | ${10} | ${10}
`('calculateIngredient($recipe, $servings).totalPeron should return $expected persons', ({
                                                                                                                                                                                       recipe,
                                                                                                                                                                                       servings,
                                                                                                                                                                                       expected
                                                                                                                                                                                     }) => {
    expect(calculateRecipe(recipe, servings).servings).toBe(expected)
  });

  test.each`
  recipe    | servings    | expected
  ${recipe} | ${1} | ${140}
  ${recipe} | ${2} | ${280}
  ${recipe} | ${10} | ${1400}
  `('calculateIngredient($recipe, $servings) ingredient kibbeling should return $expected persons', ({
                                                                                                                                                                                                         recipe,
                                                                                                                                                                                                         servings,
                                                                                                                                                                                                         expected
                                                                                                                                                                                                       }) => {
    const {ingredients} = calculateRecipe(recipe, servings)

    expect(ingredients.find(ingredient => ingredient.name === kibbeling.name)?.quantity).toBe(expected)
  });

  test.each`
  recipe    | servings    | expected
  ${recipe} | ${1} | ${undefined}
  ${recipe} | ${2} | ${undefined}
  ${recipe} | ${10} | ${undefined}
  `('calculateIngredient($recipe, $servings) ingredient peper should return $expected persons', ({
                                                                                                                                                                                                                      recipe,
                                                                                                                                                                                                                      servings,
                                                                                                                                                                                                                      expected
                                                                                                                                                                                                                    }) => {
    const {ingredients} = calculateRecipe(recipe, servings)

    expect(ingredients.find(ingredient => ingredient.name === peper.name)?.quantity).toBe(expected)
  });

  test('All ingredients should be returned', () => {
    expect(calculateRecipe(recipe, 1).ingredients).toHaveLength(recipe.ingredients.length)
  })

  test('Original recipe should not be adjusted', () => {
    const newRecipe = calculateRecipe(recipe, 1);
    expect(newRecipe).not.toBe(recipe);
    expect(newRecipe.ingredients).not.toBe(recipe.ingredients);

    newRecipe.ingredients.forEach((ingredient, index) => {
      expect(ingredient.name).toBe(ingredient.name)
      expect(ingredient).not.toBe(recipe.ingredients[0]);
    })
  })
})
