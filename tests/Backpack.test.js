import Backpack from "../src/Backpack.js";
import Item from "../src/Item.js";

describe("Backpack", () => {
  it("should correctly format description with multiple items", () => {
    const items = [new Item("item1", 5, 10), new Item("item2", 4, 7)];
    const backpack = new Backpack(items, 17);
    const description = backpack.getDescription();

    expect(description).toBe("item1+item2 - 17");
  });
});
