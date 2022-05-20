export default class HumanAge {
  constructor(ageNow, ageEnd) {
    this.ageNow = ageNow;
    this.ageEnd = ageEnd;
  }

  planetAge(planet) {
    if (planet === "mercury" ) {
      return (Math.round(this.ageNow / .24));
    } else if (planet === "venus" ) {
      return (Math.round(this.ageNow / .62));;
    } else if (planet === "mars" ) {
      return (Math.round(this.ageNow / 1.88));;
    } else if (planet === "jupiter" ) {
      return (Math.round(this.ageNow / 11.86));;
    } else {
      return "";
    }
  } 
  
  planetAgeLeft(planet2) {
    if (this.ageNow < this.ageEnd){
      if (planet2 === "mercury"){
        return (Math.round((this.ageEnd - this.ageNow) / .24));
      } else if (planet2 === "venus"){
        return (Math.round((this.ageEnd - this.ageNow) / .62));
      } else if (planet2 === "mars"){
        return (Math.round((this.ageEnd - this.ageNow) / 1.88)); 
      } else if (planet2 === "jupiter"){
        return (Math.round((this.ageEnd - this.ageNow) / 11.86));
      }
    } else {
      if (planet2 === "mercury"){
        return (Math.round((this.ageNow - this.ageEnd) / .24)); 
    }




}
}
}