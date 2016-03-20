/**
 * [mergeIngredients description]
 * @param  {Array<Array>} menuIngredients
 * @return {Array}
 */
export function mergeMenuIngredients(menuIngredients) {
  return menuIngredients.reduce((flatten, recipeIngredients) => {
    return flatten.concat(recipeIngredients);
  }, []);
}
