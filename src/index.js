import { extractIngredients } from './recipe-parser';
import { mergeMenuIngredients } from './ingredients-merger';

const recipes = [];
const ingredients = mergeMenuIngredients(recipes.map((recipe) => extractIngredients(recipe)));

console.log(ingredients);
