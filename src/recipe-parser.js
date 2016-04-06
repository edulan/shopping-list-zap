import { markdown } from 'markdown';

/**
 * [extractBlocks description]
 * @param  {String} text
 * @return {Tree}
 */
function extractBlocks(text) {
  return markdown.parse(text);
}

/**
 * [parseIngredients description]
 * @param  {Tree} blocks
 * @return {Array<String>}
 */
function parseIngredients(blocks) {
  const headerPositions = blocks.reduce((acum, node, index) => {
    if (!Array.isArray(node)) return acum;

    if (isHeaderBlock(node, 2)) {
      acum.push(index);
    }

    return acum;
  }, []);

  const firstHeaderBounds = headerPositions.slice(0, 2);
  const firstHeaderInnerBlocks = blocks.slice(firstHeaderBounds[0] + 1, firstHeaderBounds[1]);

  const flatIngredientsList = firstHeaderInnerBlocks.reduce((acum, node) => {
    if (!Array.isArray(node)) return acum;

    if (isListBlock(node)) {
      return acum.concat(node.slice(1));
    }

    return acum;
  }, []);

  return flatIngredientsList.map((node) => node[1]);
}

/**
 * [isEmptyNode description]
 * @param  {Array}  node
 * @return {Boolean}
 */
function isEmptyNode(node) {
  return node.length === 0;
}

/**
 * [isListItemBlock description]
 * @param  {Array}  node
 * @return {Boolean}
 */
function isListItemBlock(node) {
  return !isEmptyNode(node) &&
         node[0] === 'listitem';
}

/**
 * [isListBlock description]
 * @param  {Array}  node
 * @return {Boolean}
 */
function isListBlock(node) {
  return !isEmptyNode(node) &&
         node[0] === 'bulletlist';
}

/**
 * [isHeaderBlock description]
 * @param  {Array}  node
 * @return {Boolean}
 */
function isHeaderBlock(node, level = 1) {
  return !isEmptyNode(node) &&
         node[0] === 'header' &&
         node[1] && node[1].level === level;
}

/**
 * extractIngredients
 * @param  {String} text
 * @return {Array<String>}
 */
export function extractIngredients(text) {
  const blocks = extractBlocks(text);

  if (!blocks.length) return [];

  const ingredients = parseIngredients(blocks);

  return ingredients;
}
