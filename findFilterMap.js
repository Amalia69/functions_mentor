/* eslint-disable strict */
//find
const parks = [
  { name: 'Biscayne', rating: 4.2 },
  { name: 'Grand Canyon', rating: 5 },
  { name: 'Gateway Arch', rating: 4.5 },
  { name: 'Indiana Dunes', rating: 4.1 },
];
let found = null;
for (let i = 0; i < parks.length; i++) {
  const park = parks[i];
  if (park.name === 'Biscayne') found = park;
}
console.log(found); //> { name: "Biscayne", rating: 4.2 }
found =parks.find((element) => element.name='Brisbane');
console.log(found);
//filter
let result = [];
for (let i = 0; i < parks.length; i++) {
  const park = parks[i];
  if (park.rating >= 4.5) result.push(park);
}
console.log(result); // [ { name: "Grand Canyon", rating: 5 }, { name: "Gateway Arch", rating: 4.5 } ]
result= parks.filter((element)=>element.rating>=4.5);
console.log(result); // [ { name: "Grand Canyon", rating: 5 }, { name: "Gateway Arch", rating: 4.5 } ]
//map
result = [];
for (let i = 0; i < parks.length; i++) {
  result.push(parks[i].name);
}
console.log(result); // [ "Biscayne", "Grand Canyon", "Gateway Arch", "Indiana Dunes" ]

result = parks.map((element)=>element.name);
console.log(result); // [ "Biscayne", "Grand Canyon", "Gateway Arch", "Indiana Dunes" ]
result = parks.map((element)=>{return element.name;});// function {} requires return
console.log(result); // [ "Biscayne", "Grand Canyon", "Gateway Arch", "Indiana Dunes" ]
//some
for (let i = 0; i < parks.length; i++) {
  if (parks[i].rating > 4) result = true;
}
console.log(result); // true
result =parks.some((element)=>element.rating>4);
console.log(result); // true
result =parks.every((element)=>element.rating>4.5);
console.log(result); // true
