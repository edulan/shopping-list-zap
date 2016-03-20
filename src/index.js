import { extractIngredients } from './recipe-parser';
import { mergeMenuIngredients } from './ingredients-merger';

const RECIPE1 = `
## Ingredientes

* 200 gr. de escarola
* 1 huevo
* 2 tiras bacon curado
* 7/8 croutons
* 50 gr. de pistachos
* 1 granada

## Elaboración

Ver receta "Como preparar Huevo Poche".
`;

const RECIPE2 = `
##Ingredientes

###Guiso
* 1/4 cebolla
* 1 puerro
* 1 hoja de laurel
* 1 diente de ajo
* 1 chorizo o longaniza
* 1 trozo de jamón
* 1 patata
* 1 zanahoria
* 1 tomate
* Pimentón dulce
* Sal

###Refrito
* 1/4 cebolla
* 4 cucharadas de aceite de oliva virgen extra
* 1 cucharadita de harina de trigo

##Elaboración
1. Poner a cocer todo en la olla.
1. Preparar refrito.
`;

const RECIPE3 = `
## Ingredientes

### Guiso
* 250 gr. de alubias blancas
* 1 chorizo
* 1/2 cabeza de ajos (sin pelar)
* 2 hojas de laurel

### Sofrito
* 2 dientes de ajo
* 1/2 cebolla
* 150 gr. pimiento rojo
* 150 gr. pimiento verde
* 2 o 3 cucharadas de tomate triturado
* 1 cucharada de harina
* 1 cucharadita de pimenton
* Aceite de oliva virgen extra

## Elaboración

### Preparativos

Poner las alubias en remojo con agua fria la noche anterior.

### Sofrito

Pochar lentamente.

### Procedimiento

Ponemos en una olla grande las alubias, la media cabeza de ajos, el chorizo (sin la piel) y las 2 hojas de laurel. Cubrimos de agua hasta que sobresalga 1 dedo aproximadamente. Cerramos la olla y ponemos a hervir a fuego medio/alto durante 40/45 minutos. Una vez cocidas las alubias, agregamos el sofrito y removemos cuidadosamente, girando suavemente la cazuela para no romper las alubias. Dejamos hervir otros 5/10 minutos mas.

Una vez listo, sacamos el chorizo y lo cortamos en trozos de 1 cm mas o menos. Volvemos a agregar a la olla y ya esta listo para servir.

## Referencia

http://www.lasmariacocinillas.com/2013/10/judias-blancas-con-chorizo.html
`;

const recipes = [RECIPE1, RECIPE2, RECIPE3];
const ingredients = mergeMenuIngredients(recipes.map((recipe) => extractIngredients(recipe)));

console.log(ingredients);
