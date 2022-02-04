export default class Age {
  constructor(earthAge){
    this.earthAge = earthAge;
    this.mercAge = 0;
    this.venAge = 0;
    this.marsAge = 0;
    this.jupAge = 0;
    this.satAge = 0;
    this.urAge = 0;
  }

  calcAge() {
    this.mercAge = Math.round((this.earthAge/.24)*10)/10;
    this.venAge = Math.round((this.earthAge/.62)*10)/10;
    this.marsAge = Math.round((this.earthAge/1.88)*10)/10;
    this.jupAge = Math.round((this.earthAge/11.86)*10)/10;
    this.satAge = Math.round((this.earthAge/29.46)*100)/100
    this.urAge = Math.round((this.earthAge/84.01)*100)/100
  }
  
  calcNepAge() {
    return Math.round((this.earthAge/164.79)*100)/100
  }

  calcPlutoAge() {
    return Math.round((this.earthAge/248.59)*100)/100
  }
}

// average life expectancy on earth is 72.74 years

// let age = new Age(27)
// age.calcAge()
// console.log(age.mercAge)