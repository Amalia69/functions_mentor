/* eslint-disable strict */
const areas = [768, 1004.2, 433.1];
let result = 0;
for (let i = 0; i < areas.length; i++) {
  result += areas[i];
}
console.log(result); //> 2205.3
let accumulator = 0;
result = areas.reduce((acc, elem) => acc + elem, accumulator);
console.log(result); //> 2205.3
result = areas.reduce((acc, area, index) => {
  console.log(`index: ${index}`, `acc: ${acc}`, `area: ${area}`);
  return acc + area;
});
console.log(result); //> 2205.3
//complex usage
const parks = [
  { name: 'Acadia', areaInSquareKm: 198.6 },
  { name: 'Crater Lake', areaInSquareKm: 741.5 },
  { name: 'Kenai Fjords', areaInSquareKm: 2710 },
  { name: 'Zion', areaInSquareKm: 595.9 },
];
  
result = parks.reduce((acc, park) => {
  acc[park.name] = park.areaInSquareKm;
  return acc;
},{});
console.log(result);