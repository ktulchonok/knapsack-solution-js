import Backpack from "./Backpack.js";
import Item from "./Item.js";

/**
 *
 * @param {Item[]} items array of possible items
 * @param {number} capacity capacity of backpack
 * @returns {Backpack[]} array of optimal combinations
 */
export default function getOptimalResults(items, capacity) {
  console.assert(items);
  console.assert(items.length, "Array of items is empty");
  console.assert(capacity, "Capacity is not set or equal to 0");

  /**
   * array of intermediate states of the backpack
   * @type {Backpack[]}
   */
  const bp = Array(items.length + 1)
    .fill(null)
    .map(() => Array(capacity + 1));

  let optimalVar = [new Backpack([], 0)];

  // S[i, j] = max (S[i−1, j], price of i-th item + S[i−1, j−weight of i-th item])
  for (let i = 0; i < items.length + 1; i++) {
    for (let j = 0; j < capacity + 1; j++) {
      if (i === 0 || j === 0) {
        // fill 0th row and 0th column with zeros
        bp[i][j] = new Backpack([], 0);
      } else if (i === 1) {
        // the first line is filled in simply: the first item is put or not put depending on the weight
        bp[i][j] =
          items[0].weight <= j
            ? new Backpack([items[0]], items[0].price)
            : new Backpack([], 0);
      } else {
        if (items[i - 1].weight > j) {
          // if another item does not fit in the backpack,
          bp[i][j] = bp[i - 1][j]; // record the previous maximum
        } else {
          // calculate the price of the next item + the maximum price for (the maximum possible weight for the backpack item weight)
          const newPrice =
            items[i - 1].price + bp[i - 1][j - items[i - 1].weight].price;
          if (bp[i - 1][j].price > newPrice) {
            // if the previous maximum is greater
            bp[i][j] = bp[i - 1][j]; // write it down
          } else {
            // otherwise, save new maximum: current item + free space cost
            bp[i][j] = new Backpack(
              [items[i - 1], ...bp[i - 1][j - items[i - 1].weight].items],
              newPrice
            );
            if (newPrice > optimalVar[0].price) {
              optimalVar = [bp[i][j]];
            } else if (newPrice === optimalVar[0].price) {
              optimalVar.push(bp[i][j]);
            }
          }
        }
      }
    }
  }
  return optimalVar;
}
