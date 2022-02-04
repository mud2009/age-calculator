export default class Haiku {
  constructor(earthAge){
    this.earthAge = earthAge
  }

  calcMercAge() {
    return this.earthAge/.24
  }
}