/**
 * [extractBlocks description]
 * @param  {String} text
 * @return {Array<String>}
 */
function extractBlocks(text) {
  return text.split(/^#{1,2}\s?\w+$/m);
}

/**
 * [parseIngredients description]
 * @param  {String}
 * @return {Array<String>}
 */
function parseIngredients(block) {
  return block.split('\n').map((line) => line.split('* ')[1]);
}

/**
 * [compactLines description]
 * @param  {Array<String>} lines
 * @return {Array<String>}
 */
function compactLines(lines) {
  return lines.filter((line) => !!line);
}

/**
 * extractIngredients
 * @param  {String} text
 * @return {Array<String>}
 */
export function extractIngredients(text) {
  // Skip first line (empty line)
  const blocks = extractBlocks(text).slice(1);

  if (!blocks.length) return [];

  return compactLines(parseIngredients(blocks[0]));
}
