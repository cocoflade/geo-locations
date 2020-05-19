const { expect } = require("chai");

const {
  randomGeoPoints,
  generateRandomPoint,
  currentTime,
} = require("../index");

describe("randomGeoPoints", () => {
  it("returns an array of lat and long objects", () => {
    const input = ({ lat: 53.478056, lng: -2.245833 }, 1500, 200);
    expect(randomGeoPoints(input)).to.be.an("array");
    // console.log(randomGeoPoints(input));
    // ^^ this shows as an empty array? why?
  });
});

describe("currentTime", () => {
  it("Returns a correctly formatted string of the current time in h:m:s", () => {
    expect(currentTime()).to.be.a.string("");
    expect(currentTime()).to.include(":");
  });
});
