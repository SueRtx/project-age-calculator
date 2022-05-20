import HumanAge from '../src/js/planet.js';

describe('HumanAge', () => {
  let humanAge
  beforeEach(() =>{
    humanAge = humanAge = new HumanAge(30, 90);
  })

  test("should correctly create a humanAge object", () => {
    expect(humanAge.ageNow).toEqual(30);
    expect(humanAge.ageEnd).toEqual(90);
  });

  test("should correctly calculate user age on the Mercury", () => {
    expect(humanAge.planetAge("mercury")).toEqual(125);
  });

  test("should correctly calculate user age on the planet", () => {
    expect(humanAge.planetAge("venus")).toEqual(48);
    expect(humanAge.planetAge("mars")).toEqual(16);
    expect(humanAge.planetAge("jupiter")).toEqual(3);
    expect(humanAge.planetAge("sun")).toEqual("");
  });
  

});