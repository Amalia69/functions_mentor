/* eslint-disable strict */
const location = {
  name: 'Arches',
  state: 'Utah',
  geo: {
    lat: 38.68,
    lon: -109.57,
  },
};
  
const getLocationState = function (location) {
  return location.state;
};
//arrow function
const getLocationStateArrow = (location) => {
  return location.state;
};
// Arrow function
const getLocationNameArrow = (location) => location.name;
// Arrow function
const getGoogleMapURLArrow = ({ geo: { lat, lon } }, zoom = 10) => (
  `https://www.google.com/maps/@${lat},${lon},${zoom}z`);
console.log(getLocationState(location));
console.log(getLocationStateArrow(location));
console.log(getLocationNameArrow(location));
const loc ={
  geo:{lat:30,lon:30},
  zoom:10
};
console.log(getGoogleMapURLArrow(loc));