import {Ingredient} from "./ingredient";

export interface Recipe {
  totalPerson: number;
  ingredients: Ingredient[];
  name: string;
}
