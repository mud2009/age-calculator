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
    expect(age.calcMercAge()).toEqual(112);
  });
});

describe ('calcVenAge', () => {

  test('should calculate age on Venus', () => {
    let age = new Age(27);
    expect(age.calcVenAge()).toEqual(43);
  });
});

describe ('calcMarsAge', () => {

  test('should calculate age on Mars', () => {
    let age = new Age(27);
    expect(age.calcMarsAge()).toEqual(14);
  });
});

describe ('calcJupAge', () => {

  test('should calculate age on Jupiter', () => {
    let age = new Age(27);
    expect(age.calcJupAge()).toEqual(2);
  });
});

describe ('calcSatAge', () => {

  test('should calculate age on Saturn', () => {
    let age = new Age(27);
    expect(age.calcSatAge()).toEqual(2);
  });
});