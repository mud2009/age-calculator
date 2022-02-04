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
});

describe ('calcVenLife', () => {

  beforeEach(() => {
    age.calcVenLife();
  });

  test('should calculate years left for age on venus, and return years left if that number is positive', () => {
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

  test('should calculate years left for age on Mars, and return years left if that number is positive', () => {
    expect(age.marsLifeLeft).toEqual(58.34);
  });

  test('if the mars age is over the human life expectancy, should return years lived past expectancy', () => {
    let ageOld = new Age(200);
    ageOld.calcAge();
    ageOld.calcMarsLife();
    expect(ageOld.marsLifeLived).toEqual(33.66);
  });
});

describe ('calcJupLife', () => {

  beforeEach(() => {
    age.calcJupLife();
  });

  test('should calculate years left for age on jupiter, and return years left if that number is positive', () => {
    expect(age.jupLifeLeft).toEqual(70.44);
  });

  test('should return years lived past life expectancy if age is high enough', () => {
    let ageOld = new Age(1000);
    ageOld.calcAge();
    ageOld.calcJupLife();
    expect(ageOld.jupLifeLived).toEqual(11.56);
  })
});