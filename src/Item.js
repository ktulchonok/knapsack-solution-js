export default class Item {
  /**
   *
   * @param {string} name название вещи
   * @param {number} weight вес
   * @param {number} price стоимость
   */
  constructor(name, weight, price) {
    this.name = name;
    this.weight = weight;
    this.price = price;
  }
}
