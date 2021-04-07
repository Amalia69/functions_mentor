/* eslint-disable strict */
const parks = [
  { name: 'Biscayne', rating: 4.2 },
  { name: 'Grand Canyon', rating: 5 },
  { name: 'Gateway Arch', rating: 4.5 },
  { name: 'Indiana Dunes', rating: 4.1 },
];
  
parks.sort((parkA, parkB) => (parkA.rating > parkB.rating ? 1 : -1));
console.log(parks);
parks.sort((parkA, parkB) => parkA.rating - parkB.rating);
console.log(parks);
parks.sort((parkA, parkB) => (parkA.name.toLocaleLowerCase() > parkB.name .toLocaleLowerCase() ? 1 : -1));
console.log(parks);
console.log(['Biscayne', 'grand canyon', 'Gateway arch'].sort());
//> [ 'Biscayne', 'Gateway arch', 'grand canyon' ]