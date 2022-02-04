export default class Age {
  constructor(earthAge){
    this.earthAge = earthAge;
  }

  calcMercAge() {
    return Math.round((this.earthAge/.24)*10)/10;
  }

  calcVenAge() {
    return Math.round((this.earthAge/.62)*10)/10;
  }

  calcMarsAge() {
    return Math.round((this.earthAge/1.88)*10)/10;
  }

  calcJupAge() {
    return Math.round((this.earthAge/11.86)*10)/10;
  }

  calcSatAge() {
    return Math.round((this.earthAge/29.46)*100)/100
  }
}

// let age = new Age(27);
// console.log(age.calcSatAge())