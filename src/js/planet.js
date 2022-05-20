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
}