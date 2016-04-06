import assert from 'assert';
import { extractIngredients } from '../src/recipe-parser';

const recipe = `
## foo
* bar
* baz
## foo
foo bar foo
`;

const recipeWithHeader1 = `
# BAZ
## foo
* bar
* baz
## foo
foo bar foo
`;

const recipeWithHeader3 = `
## foo
### foo2
* bar
* baz
### foo3
* foofoo
## foo
foo bar foo
`;

const emptyRecipe = '';

describe('Recipe parser', function() {
  describe('extractIngredients', function() {
    it('returns recipe ingredients list', function() {
      const ingredients = [
        'bar',
        'baz'
      ];

      assert.deepEqual(extractIngredients(recipe) , ingredients);
    });

    it('returns recipe ingredients list on a recipe with a first level header', function() {
      const ingredients = [
        'bar',
        'baz'
      ];

      assert.deepEqual(extractIngredients(recipeWithHeader1) , ingredients);
    });

    it('returns recipe ingredients list on a recipe with third level headers', function() {
      const ingredients = [
        'bar',
        'baz',
        'foofoo'
      ];

      assert.deepEqual(extractIngredients(recipeWithHeader3) , ingredients);
    });

    it('returns empty list with an empty recipe', function() {
      const ingredients = [];

      assert.deepEqual(extractIngredients(emptyRecipe) , ingredients);
    });
  });
});
