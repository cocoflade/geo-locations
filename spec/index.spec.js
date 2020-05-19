const { expect } = require("chai");
const chai = require("chai");
chai.should();
chai.use(require("chai-things"));

const {
  randomGeoPoints,
  generateRandomPoint,
  currentTime,
} = require("../index");

describe("randomGeoPoints", () => {
  it("returns an array of lat and long objects", () => {
    expect(
      randomGeoPoints({ lat: 53.478056, lng: -2.245833 }, 1500, 200)
    ).to.be.an("array");
    expect(
      randomGeoPoints({ lat: 53.478056, lng: -2.245833 }, 1500, 200)
    ).have.lengthOf(200);
  });

  describe("currentTime", () => {
    it("Returns a correctly formatted string of the current time in h:m:s", () => {
      expect(currentTime()).to.be.a.string("");
      expect(currentTime()).to.include(":");
    });
  });
});
