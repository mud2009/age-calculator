export default class Age {
  constructor(earthAge){
    this.earthAge = earthAge;
  }

  calcMercAge() {
    return Math.floor(this.earthAge/.24);
  }

  calcVenAge() {
    return Math.floor(this.earthAge/.62);
  }

  calcMarsAge() {
    return Math.floor(this.earthAge/1.88);
  }

  calcJupAge() {
    return Math.floor(this.earthAge/11.86);
  }

  calcSatAge() {
    return Math.round((this.earthAge/29.46)*100)/100
  }
}

let age = new Age(27);
console.log(age.calcSatAge())