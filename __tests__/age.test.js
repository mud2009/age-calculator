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
});

describe ('calcMercLife', () => {

  beforeEach(() => {
    age.calcMercLife();
  });

  test('should calculate years left for age on mercury', () => {
    expect(age.mercLifeLeft).toEqual(-39.76);
  });
  test('if the mercury age is under the human life expectancy, should return life left', () => {
    let ageYoung = new Age(4);
    ageYoung.calcAge();
    ageYoung.calcMercLife();
    expect(ageYoung.mercLifeLeft).toEqual(56.04);
  });
  test('should return years lived past life expectancy on mercury, if age is high enough', () => {
    expect(age.mercLifeLived).toEqual(39.76);
  });
});

describe ('calcVenLife', () => {

  beforeEach(() => {
    age.calcVenLife();
  });

  test('should calculate years left for age on venus', () => {
    expect(age.venLifeLeft).toEqual(29.24);
  });
  test('if the venus age is under the human life expectancy, should return life left', () => {
    expect(age.venLifeLeft).toEqual(29.24);
  });
  test('should return years lived past life expectancy on venus, if age is high enough', () => {
    let ageOld = new Age(100);
    ageOld.calcAge();
    ageOld.calcVenLife();
    expect(ageOld.venLifeLived).toEqual(88.56);
  });
});

describe ('calcMarsLife', () => {

  beforeEach(() => {
    age.calcMarsLife();
  });

  test('should calculate years left for age on Mars', () => {
    expect(age.marsLifeLeft).toEqual(29.24);
  });
});