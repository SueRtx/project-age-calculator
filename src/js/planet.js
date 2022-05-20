export default class HumanAge {
  constructor(ageNow, ageEnd) {
    this.ageNow = ageNow;
    this.ageEnd = ageEnd;

  }

  planetAge(planet) {
    if (planet === "mercury" ) {
      return (Math.round(this.ageNow/.24));
   // } else if ( ) {
   //   return " ";
   
    } else {
      return "";
    }
  }  
}