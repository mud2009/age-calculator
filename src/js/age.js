export default class Age {
  constructor(earthAge){
    this.earthAge = earthAge;
  }

  calcMercAge() {
    return this.earthAge/.24;
  }
}