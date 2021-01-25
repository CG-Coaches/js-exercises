// https://www.colruyt.be/nl/lekker-koken/kibbeling-met-spinazieslaatje-en-gebakken-aardappelen
import { Recipe } from "../../model/recipe.model";
import { Ingredient } from "../../model/ingredient.model";

export const kibbeling: Ingredient = {
  name: 'kibbelingen (versmarkt)',
  quantity: 560
}
export const spinazie: Ingredient = {
  name: 'verse spinazie',
  quantity: 400
}

export const rodeBieten: Ingredient = {
  name: 'gestoomde rode bieten (versmarkt)',
  quantity: 250
}

export const avocado: Ingredient = {
  name: 'avocado',
  quantity: 1
}

export const sinaasappelen: Ingredient = {
  name: 'onbehandelde sinaasappelen (bio)',
  quantity: 1
}

export const rodeUien: Ingredient = {
  name: 'rode uien',
  quantity: 1
}

export const aardappelen: Ingredient = {
  name: 'voorgekookte aardappelblokjes (versmarkt)',
  quantity: 500
}

export const griekseYoghurt: Ingredient = {
  name: 'Griekse yoghurt',
  quantity: 170
}

export const pistacheNoten: Ingredient = {
  name: 'gepelde, ongezouten pistachenoten',
  quantity: 30
}

export const olijfolie: Ingredient = {
  name: 'olijfolie',
  quantity: 2
}

export const peper: Ingredient = {
  name: 'Zwarte peper',
}

export const zout: Ingredient = {
  name: 'Zout',
}

export const recipe: Recipe = {
  name: 'https://www.colruyt.be/nl/lekker-koken/kibbeling-met-spinazieslaatje-en-gebakken-aardappelen',
  servings: 4,
  ingredients: [
    kibbeling,
    spinazie,
    rodeBieten,
    avocado,
    sinaasappelen,
    rodeUien,
    aardappelen,
    griekseYoghurt,
    pistacheNoten,
    olijfolie,
    peper,
    zout
  ]
}
