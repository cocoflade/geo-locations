//St.Peter's Square = lat: 53.478056, lng: -2.245833
// Radius = 1500m
// PositionCount = 200 points

const randomGeoPoints = (centrePoint, radius, positionCount) => {
  const points = [];
  for (let i = 0; i < positionCount; i++) {
    points.push(generateRandomPoint(centrePoint, radius));
  }
  return points;
};

const generateRandomPoint = (centrePoint, radius) => {
  const longitude = centrePoint.lng;
  const latitude = centrePoint.lat;

  // Convert Radius from meters to degrees.
  const radiusInDegrees = radius / 111300;

  const u = Math.random();
  const v = Math.random();

  const w = radiusInDegrees * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);

  const xp = x / Math.cos(latitude);

  return { lat: y + latitude, lng: xp + longitude, time: currentTime() };
};

const currentTime = () => {
  const dateNow = new Date();
  const hrs = dateNow.getHours();
  const min = dateNow.getMinutes();
  const sec = dateNow.getSeconds();
  const fullTime = `${hrs}:${min}:${sec}`;
  return fullTime;
};

// console.log(randomGeoPoints({ lat: 53.478056, lng: -2.245833 }, 1500, 200));

module.exports = { randomGeoPoints, generateRandomPoint, currentTime };
