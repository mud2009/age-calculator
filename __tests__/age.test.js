import Age from "../src/js/age.js"

let age;

beforeEach(() => {
  age = new Age(27);
});

describe ('Age', () => {

  test('should construct an Age object', () => {
    expect(age.earthAge).toEqual(27);
  });
});

describe ('calcMercAge', () => {

  test('should calculate age on Mercury', () => {
    expect(age.calcMercAge()).toEqual(112.5);
  });
});

describe ('calcVenAge', () => {

  test('should calculate age on Venus', () => {
    expect(age.calcVenAge()).toEqual(43.5);
  });
});

describe ('calcMarsAge', () => {

  test('should calculate age on Mars', () => {
    expect(age.calcMarsAge()).toEqual(14.4);
  });
});

describe ('calcJupAge', () => {

  test('should calculate age on Jupiter', () => {
    expect(age.calcJupAge()).toEqual(2.3);
  });
});

describe ('calcSatAge', () => {

  test('should calculate age on Saturn', () => {
    expect(age.calcSatAge()).toEqual(0.92);
  });
});

describe ('calcUrAge', () => {

  test('should calculate age on Uranus', () => {
    expect(age.calcUrAge()).toEqual(0.32);
  });
});

describe ('calcNepAge', () => {

  test('should calculate age on Neptune', () => {
    expect(age.calcNepAge()).toEqual(0.16);
  });
});

describe ('calcPlutoAge', () => {

  test('should calculate age on Pluto', () => {
    expect(age.calcPlutoAge()).toEqual(0.11);
  });
});