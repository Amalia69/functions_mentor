/* eslint-disable strict */
function isExcellent(park) {
  console.log('This is a function declaration.');
  return park.rating > 4 ? 'Excellent!' : 'Good';
}
  
const getRatingAsWord = function isExcellent(park) {
  console.log('This is a function expression that has a name.');
  return park.rating > 4 ? 'Excellent!' : 'Good';
};
const isExcellent1 = function (park) {
  console.log('This is an anonymous function that does not have a name.');
  return park.rating > 4 ? 'Excellent!' : 'Good';
};  
let park =4
console.log(isExcellent(park));
console.log('----------');
console.log(getRatingAsWord);
console.log('----------');
console.log(getRatingAsWord(park));
console.log('----------');
console.log(isExcellent1);
console.log('----------');
console.log(isExcellent1(park));

