import Age from "../src/js/age.js"

let age;

beforeEach(() => {
  age = new Age(27);
  age.calcAge();
});

describe ('Age', () => {

  test('should construct an Age object', () => {
    expect(age.earthAge).toEqual(27);
  });
});

describe ('calcAge', () => {

  test('should calculate age on Mercury', () => {
    expect(age.mercAge).toEqual(112.5);
  });

  test('should calculate age on Venus', () => {
    expect(age.venAge).toEqual(43.5);
  });

  test('should calculate age on Mars', () => {
    expect(age.marsAge).toEqual(14.4);
  });

  test('should calculate age on Jupiter', () => {
    expect(age.jupAge).toEqual(2.3);
  });

  test('should calculate age on Saturn', () => {
    expect(age.satAge).toEqual(0.92);
  });

  test('should calculate age on Uranus', () => {
    expect(age.urAge).toEqual(0.32);
  });

  test('should calculate age on Neptune', () => {
    expect(age.nepAge).toEqual(0.16);
  });
});


describe ('calcPlutoAge', () => {

  test('should calculate age on Pluto', () => {
    expect(age.calcPlutoAge()).toEqual(0.11);
  });
});