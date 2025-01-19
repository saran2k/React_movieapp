import _ from 'lodash';

/**
 * Paginate an array of items.
 *
 * @param {Array} items - The array of items to paginate.
 * @param {number} pageNumber - The current page number.
 * @param {number} pageSize - The number of items per page.
 * @returns {Array} The paginated items for the current page.
 */
export function paginate(items, pageNumber, pageSize) {
  // Validate inputs to prevent errors
  if (!Array.isArray(items)) {
    console.error('The "items" parameter must be an array.');
    return [];
  }

  if (typeof pageNumber !== 'number' || pageNumber < 1) {
    console.error('The "pageNumber" must be a positive number greater than 0.');
    return [];
  }

  if (typeof pageSize !== 'number' || pageSize < 1) {
    console.error('The "pageSize" must be a positive number greater than 0.');
    return [];
  }

  const startIndex = (pageNumber - 1) * pageSize;
  console.log(`Items Length: ${items.length}`);
  console.log(`Page Number: ${pageNumber}`);
  console.log(`Page Size: ${pageSize}`);
  console.log(`Start Index: ${startIndex}`);

  // Function Chain - Functional Programming with Lodash for pagination
  return _(items)
    .slice(startIndex)      // Start at the correct index for pagination
    .take(pageSize)         // Take only the number of items defined by pageSize
    .value();               // Return the final value after chaining
}
