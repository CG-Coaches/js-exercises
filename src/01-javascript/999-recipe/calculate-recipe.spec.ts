import {calculateRecipe} from "./calculate-recipe";
import {kibbeling, peper, recipe} from "./recipe";

describe('calculateRecipe', () => {

  test.each`
  recipe    | totalPerson    | expected
  ${recipe} | ${1} | ${1}
  ${recipe} | ${2} | ${2}
  ${recipe} | ${10} | ${10}
`('calculateIngredient($recipe, $totalPerson).totalPeron should return $expected persons', ({
                                                                                                                                                                                       recipe,
                                                                                                                                                                                       totalPerson,
                                                                                                                                                                                       expected
                                                                                                                                                                                     }) => {
    expect(calculateRecipe(recipe, totalPerson).totalPerson).toBe(expected)
  });

  test.each`
  recipe    | totalPerson    | expected
  ${recipe} | ${1} | ${140}
  ${recipe} | ${2} | ${280}
  ${recipe} | ${10} | ${1400}
  `('calculateIngredient($recipe, $totalPerson) ingredient kibbeling should return $expected persons', ({
                                                                                                                                                                                                         recipe,
                                                                                                                                                                                                         totalPerson,
                                                                                                                                                                                                         expected
                                                                                                                                                                                                       }) => {
    const {ingredients} = calculateRecipe(recipe, totalPerson)

    expect(ingredients.find(ingredient => ingredient.name === kibbeling.name)?.amount).toBe(expected)
  });

  test.each`
  recipe    | totalPerson    | expected
  ${recipe} | ${1} | ${undefined}
  ${recipe} | ${2} | ${undefined}
  ${recipe} | ${10} | ${undefined}
  `('calculateIngredient($recipe, $totalPerson) ingredient peper should return $expected persons', ({
                                                                                                                                                                                                                      recipe,
                                                                                                                                                                                                                      totalPerson,
                                                                                                                                                                                                                      expected
                                                                                                                                                                                                                    }) => {
    const {ingredients} = calculateRecipe(recipe, totalPerson)

    expect(ingredients.find(ingredient => ingredient.name === peper.name)?.amount).toBe(expected)
  });

  test('All ingredients should be returned', () => {
    expect(calculateRecipe(recipe, 1).ingredients).toHaveLength(recipe.ingredients.length)
  })
})
