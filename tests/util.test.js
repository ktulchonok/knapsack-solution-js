import getOptimalResults from "../src/util.js";
import Item from "../src/Item.js";
import Backpack from "../src/Backpack.js";

describe("getOptimalResults", () => {
  it("should return the correct optimal combination for simple inputs", () => {
    const items = [
        new Item("ukulele", 5, 1500),
        new Item("laptop", 4, 2000),
      ];
    const capacity = 9;
    const optimalCombination = getOptimalResults(items, capacity)[0];

    const expected = new Backpack([items[0], items[1]], 3500);

    expect(optimalCombination.price).toEqual(expected.price);
  });

  it("should return an empty backpack if all items too heavy", () => {
    const items = [
        new Item("ukulele", 2, 1500),
        new Item("pc", 4, 3000),
        new Item("laptop", 3, 2000),
      ];
    const capacity = 1;
    const optimalCombination = getOptimalResults(items, capacity)[0];

    const expected = new Backpack([], 0);

    expect(optimalCombination.price).toEqual(expected.price);
  });

  it("should return the correct optimal combination for difficult inputs", () => {
    const items = [
      new Item("ukulele", 1, 1500),
      new Item("pc", 4, 3000),
      new Item("laptop", 3, 2000),
    ];
    const capacity = 4;
    const optimalCombination = getOptimalResults(items, capacity)[0];

    const expected = new Backpack([items[0], items[2]], 3500);

    expect(optimalCombination.price).toEqual(expected.price);
  });

  it("should return the several combination if it's possible", () => {
    const items = [
      new Item("ukulele", 1, 1500),
      new Item("pc", 4, 3000),
      new Item("laptop", 3, 2000),
      new Item("ipad", 3, 2000),
    ];
    const capacity = 4;
    const optimalCombination = getOptimalResults(items, capacity);

    expect(optimalCombination.length).toEqual(2);
  });

});
