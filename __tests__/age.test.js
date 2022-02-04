import Age from "../src/js/age.js"

describe ('Age', () => {

  test('should construct an Age object', () => {
    let age = new Age(27);
    expect(age.earthAge).toEqual(27);
  });
});

describe ('calcMercAge', () => {

  test('should calculate age on Mercury', () => {
    let age = new Age(27);
    expect(age.calcMercAge()).toEqual(112.5);
  });
});

describe ('calcVenAge', () => {

  test('should calculate age on Venus', () => {
    let age = new Age(27);
    expect(age.calcVenAge()).toEqual(43.5);
  });
});