import Age from "../src/js/age.js"

describe ('Age', () => {

  test('should construct an Age object', () => {
    let age = new Age(27);
    expect(age.earthAge).toEqual(27)
  });
});