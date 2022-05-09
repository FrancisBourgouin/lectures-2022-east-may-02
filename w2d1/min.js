/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */

// Minimum of a list
// Input: a list (array)
// Output: number

// Iterate over the numbers, and find the smallest one
// For loop
// Store current smallest number
// Check if number is smaller than the previous one
// If it's smaller, replace, if not, do nothing
// Return the number

const min = function (listOfNumbers) {
  let smallestNumber = listOfNumbers[0];

  for (const currentNumber of listOfNumbers) {
    if (smallestNumber > currentNumber) {
      smallestNumber = currentNumber;
    }
  }

  return smallestNumber;
};
