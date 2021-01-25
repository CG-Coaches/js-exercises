import { Ingredient } from "./ingredient.model";

export interface Recipe {
  name: string;
  servings: number;
  ingredients: Ingredient[];
}
