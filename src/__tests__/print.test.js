const { idText } = require("typescript");
const { printPosition } = require("../print");

describe("The robot position", () => {
  it("should give us the robots position", () => {
    const currentPosition = { x: 5, y: 5 };
    const output = `Robot is at { x: ${5}, y: ${5} }`;
    expect(printPosition(currentPosition)).toEqual(output);
  });
});
