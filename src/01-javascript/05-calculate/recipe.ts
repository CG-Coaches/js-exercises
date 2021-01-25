// https://www.colruyt.be/nl/lekker-koken/kibbeling-met-spinazieslaatje-en-gebakken-aardappelen
import {Recipe} from "../../model/recipe";
import {Ingredient} from "../../model/ingredient";

export const kibbeling: Ingredient = {
  name: 'kibbelingen (versmarkt)',
  amount: 560
}
export const spinazie: Ingredient = {
  name: 'verse spinazie',
  amount: 400
}

export const rodeBieten: Ingredient = {
  name: 'gestoomde rode bieten (versmarkt)',
  amount: 250
}

export const avocado: Ingredient = {
  name: 'avocado',
  amount: 1
}

export const sinaasappelen: Ingredient = {
  name: 'onbehandelde sinaasappelen (bio)',
  amount: 1
}

export const rodeUien: Ingredient = {
  name: 'rode uien',
  amount: 1
}

export const aardappelen: Ingredient = {
  name: 'voorgekookte aardappelblokjes (versmarkt)',
  amount: 500
}

export const griekseYoghurt: Ingredient = {
  name: 'Griekse yoghurt',
  amount: 170
}

export const pistacheNoten: Ingredient = {
  name: 'gepelde, ongezouten pistachenoten',
  amount: 30
}

export const olijfolie: Ingredient = {
  name: 'olijfolie',
  amount: 2
}

export const peper: Ingredient = {
  name: 'Zwarte peper',
}

export const zout: Ingredient = {
  name: 'Zout',
}

export const recipe: Recipe = {
  name: 'https://www.colruyt.be/nl/lekker-koken/kibbeling-met-spinazieslaatje-en-gebakken-aardappelen',
  totalPerson: 4,
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
