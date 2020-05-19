const { expect } = require("chai");

const { randomGeoPoints, generateRandomPoint } = require("../index");

describe("randomGeoPoints", () => {
  it("returns an array of lat and long objects", () => {
    const input = ({ lat: 53.478056, lng: -2.245833 }, 1500, 200);
    expect(randomGeoPoints(input)).to.be.an("array");
    console.log(randomGeoPoints(input));
  });
});
