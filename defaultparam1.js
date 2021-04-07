// eslint-disable-next-line strict
const products =[];
const products1 =[{
  name: 'Test',
  priceInCents: 8800,
  availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
},
{
  name: 'Test1',
  priceInCents: 8800,
  availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
},{
  name: 'Test2',
  priceInCents: 8800,
  availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
},{
  name: 'Test3',
  priceInCents: 8800,
  availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
},{
  name: 'Test',
  priceInCents: 8800,
  availableSizes: [ 0, 2, 4, 6, 12, 16 ]
}];

function checkForSizeByName(products =[], name='', size=0) {
  //use for poitn 3 -It does not explicitly return true or false when checking for the size.
  let result =false; 
  //It returns false early if there is no product.
  if (products===[])
    return false;  
  let product = null;
  for (let i = 0; i < products.length; i++) {
    //products[i] is assigned to a variable.  
    product =products[i];
    if (product.name=== name) {
      product = products[i];
    }
  }
  if (product) {
    if (product.availableSizes.includes(size)) {
      result= true;
    } 
  } 
  return result;
}
let result =checkForSizeByName();
console.log('My result:'+result);  