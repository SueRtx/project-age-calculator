import HumanAge from '../src/js/planet.js';

describe('HumanAge', () => {
  let humanAge
  beforeEach(() =>{
    humanAge = new HumanAge(30, 90);
  })

  test("should correctly create a humanAge object", () => {
    expect(humanAge.ageNow).toEqual(30);
    expect(humanAge.ageEnd).toEqual(90);
  });

  test("should correctly calculate user age in Mercury years.", () => {
    expect(humanAge.planetAge("mercury")).toEqual(125);
  });

  test("should correctly calculate user age in planet years", () => {
    expect(humanAge.planetAge("venus")).toEqual(48);
    expect(humanAge.planetAge("mars")).toEqual(16);
    expect(humanAge.planetAge("jupiter")).toEqual(3);
    expect(humanAge.planetAge("sun")).toEqual("");
  });
  
  test("should correctly calculate life expectancy age left in Mercury years", () => {
    expect(humanAge.planetAgeLeft("mercury")).toEqual(250);
  });

  test("should correctly calculate life expectancy age left in planet years", () => {
    expect(humanAge.planetAgeLeft("venus")).toEqual(97);
    expect(humanAge.planetAgeLeft("mars")).toEqual(32);
    expect(humanAge.planetAgeLeft("jupiter")).toEqual(5);
  });

  test("should correctly calculate life expectancy age past in Mercury years", () => {
    let humanAge = new HumanAge(95, 80);
    expect(humanAge.planetAgeLeft("mercury")).toEqual(63);
  });

  test("should correctly calculate life expectancy age past in planet years", () => {
    let humanAge = new HumanAge(90, 70);
    expect(humanAge.planetAgeLeft("mercury")).toEqual(83);
    expect(humanAge.planetAgeLeft("venus")).toEqual(32);
    expect(humanAge.planetAgeLeft("mars")).toEqual(11);
    expect(humanAge.planetAgeLeft("jupiter")).toEqual(2);
  });



});