export default class Age {
  constructor(earthAge){
    this.earthAge = earthAge;
    this.mercAge = 0;
    this.venAge = 0;
    this.marsAge = 0;
    this.jupAge = 0;

    this.life = 72.74; // this is the average life expectancy for humans
  }

  calcAge() {
    this.mercAge = Math.round((this.earthAge/.24)*10)/10;
    this.venAge = Math.round((this.earthAge/.62)*10)/10;
    this.marsAge = Math.round((this.earthAge/1.88)*10)/10;
    this.jupAge = Math.round((this.earthAge/11.86)*10)/10;
  }

  calcMercLife() {
    this.mercLifeLeft = Math.round((72.74 - this.mercAge)*100)/100;
    if (this.mercLifeLeft < 0) {
      this.mercLifeLived = -this.mercLifeLeft;
    }
  }

  calcVenLife() {
    this.venLifeLeft = Math.round((72.74 - this.venAge)*100)/100;
    if (this.venLifeLeft < 0) {
      this.venLifeLived = -this.venLifeLeft;
    }
  }

  calcMarsLife() {
    this.marsLifeLeft = Math.round((72.74 - this.marsAge)*100)/100;

  }

}

let age = new Age(27);
age.calcAge();
age.calcMarsLife();  
console.log(age)
// console.log(age.marsLifeLived)