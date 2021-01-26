import * as data from '../../data/recipe';
import { sortIngredients } from './sort-ingredients';

describe('sortIngredients', () => {
  test.each`
  ingredients | sorted
  ${[]} | ${[]}
  ${[data.kibbeling]} | ${[data.kibbeling]}
  ${[data.kibbeling, data.spinazie]} | ${[data.kibbeling, data.spinazie]}
  ${[data.rodeUien, data.avocado]} | ${[data.avocado, data.rodeUien]}
  ${[data.olijfolie, data.peper, data.griekseYoghurt]} | ${[data.griekseYoghurt, data.olijfolie, data.peper]}
  `('sortIngredients $ingredients', ({ ingredients, sorted }) => {
    const originalIngredients = [...ingredients];
    expect(sortIngredients(ingredients)).toEqual(sorted);
    expect(ingredients).toEqual(originalIngredients);
  });
});
