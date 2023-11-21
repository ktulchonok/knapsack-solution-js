import Item from "./Item.js";

export default class Backpack {
  items = null;
  /**
   *
   * @param {Item[]} items
   * @param {number} price
   */
  constructor(items, price) {
    this.items = items;
    this.price = price;
  }

  //
  /**
   * Описание состояния рюкзака
   * @returns {null | string}
   */
  getDescription() {
    return this.items === null
      ? ""
      : this.items.map(({ name }) => name).join("+") + " - " + this.price;
  }
}
