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
  }
}