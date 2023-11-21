import Item from "./src/Item.js";
import getOptimalResults from "./src/util.js";

const items = [
  new Item("ukulele", 1, 1500),
  new Item("pc", 4, 3000),
  new Item("laptop", 3, 2000),
  new Item("ipad", 3, 2000),
];
const capacity = 4;

const optimalRes = getOptimalResults(items, capacity)
  .map((bp) => bp.getDescription())
  .join("\n");

console.log(optimalRes);
