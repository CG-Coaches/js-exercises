import {calculateIngredient} from "./calculate-ingredient";
import {Ingredient} from "../../model/ingredient";

const orange: Ingredient = {
  name: 'sinaasappelen',
  amount: 0.25
}

const peper: Ingredient = {
  name: 'peper',
}

const ingredient0: Ingredient = {
  name: 'peper',
  amount: 0
}

describe('calculateIngredient', () => {
  test.each`
  ingredient    | totalPerson    | expected
  ${orange} | ${1} | ${0.25}
  ${orange} | ${4} | ${1}
  ${orange} | ${10} | ${2.5}
  ${peper} | ${10} | ${undefined}
  ${peper} | ${1} | ${undefined}
  ${ingredient0} | ${10} | ${0}
  ${ingredient0} | ${1} | ${0}
`('calculateIngredient($ingredient, $totalPerson)', ({ingredient, totalPerson, expected}) => {
    expect(calculateIngredient(ingredient, totalPerson)).toBe(expected)
  });
})
