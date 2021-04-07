/* eslint-disable strict */
let parks = [
  { name: 'Biscayne', rating: 4.2 },
  { name: 'Grand Canyon', rating: 5 },
  { name: 'Gateway Arch', rating: 4.5 },
  { name: 'Indiana Dunes', rating: 4.1 },
];
  
/* eslint-disable strict */
const logPark = (park) => console.log(park.name);


for (let i = 0; i < parks.length; i++) {
  logPark(parks[i]);
}
parks.forEach((park) => console.log(park.name));
// Biscayne
// Grand Canyon
// Gateway Arch
// Indiana Dunes
parks.forEach((element) => {
  console.log(element.name);
});
// Biscayne
// Grand Canyon
// Gateway Arch
// Indiana Dunes
parks.forEach((element, alpha, col) => {
  console.log(`(${alpha + 1}/${col.length}) ${element.name}`);
});
// (1/4) Biscayne
// (2/4) Grand Canyon
// (3/4) Gateway Arch
// (4/4) Indiana Dunes