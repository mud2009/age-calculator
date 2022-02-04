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
}