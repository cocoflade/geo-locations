//St.Peter's Square = lat: 53.478056, lng: -2.245833
// Radius = 1500m
// PositionCount = 200 points

const randomGeoPoints = (centrePoint, radius, positionCount) => {
  // currently pushing all 200 points into that one array, needs refactoring to create a new object instance each time.
  const geoJSON = {
    name: "NewFeatureType",
    type: "FeatureCollection",
    features: [
      {
        type: "Point",
        geometry: {
          type: "Point",
          coordinates: [],
        },
        properties: null,
      },
    ],
  };
  // iterates through given number of points,assigns each a coordinate, and pushes to coordinate array
  for (let i = 0; i < positionCount; i++) {
    geoJSON.features[0].geometry.coordinates.push(
      generateRandomPoint(centrePoint, radius)
    );
  }
  return geoJSON;
};

// calculations neccessary to generate random coordinates
const generateRandomPoint = (centrePoint, radius) => {
  const centreLong = centrePoint.lng;
  const centreLat = centrePoint.lat;

  // Convert Radius from meters to degrees.
  const radiusInDegrees = radius / 111300;
  const u = Math.random();
  const v = Math.random();
  const w = radiusInDegrees * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);
  const xp = x / Math.cos(centreLat);

  const latAndLong = (y + centreLat, xp + centreLong);

  return latAndLong;
};

// current time with user friendly format - can be refactored to be a property of each 'point' on JSON
const currentTime = () => {
  const dateNow = new Date();
  const hrs = dateNow.getHours();
  const min = dateNow.getMinutes();
  const sec = dateNow.getSeconds();
  const fullTime = `${hrs}:${min}:${sec}`;
  return fullTime;
};

// takes a central points coordinates, a radius and a number of points
console.log(
  JSON.stringify(randomGeoPoints({ lat: 53.478056, lng: -2.245833 }, 1500, 200))
);

module.exports = { randomGeoPoints, generateRandomPoint, currentTime };
