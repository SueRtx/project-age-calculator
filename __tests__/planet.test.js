import HumanAge from '../src/js/planet.js';

describe('HumanAge', () => {

  test("should correctly create a humanAge object", () => {
    const humanAge = new HumanAge(30, 90);
    expect(humanAge.ageNow).toEqual(30);
    expect(humanAge.ageEnd).toEqual(90);
  });

  

});