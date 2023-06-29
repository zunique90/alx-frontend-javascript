export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Zunique = this.constructor[Symbol.species];
    return new Zunique();
  }

  static get [Symbol.species]() {
    return this;
  }
}
