/* eslint-disable strict */
const discountedPriceWithPrice = (price, discount) => price * discount;
const finalPriceBed1 = discountedPriceWithPrice(200, 0.9); // 90% of $200
const finalPricePillow1 = discountedPriceWithPrice(52, 0.9); // 90% of $52
const finalPriceCurtain1 = discountedPriceWithPrice(32, 0.9); // 90% of 32 
const discountedPrice = (discount) => {
  return (price) => price * discount;
};
const tenPercentDiscount = discountedPrice(0.9);
const finalPriceBed = tenPercentDiscount(200); // 90% of $200
const finalPricePillow = tenPercentDiscount(52); // 90% of $52
const finalPriceCurtain = tenPercentDiscount(32); // 90% of 32
console.log(finalPriceBed1);
console.log(finalPriceBed);
console.log(finalPricePillow1);
console.log(finalPricePillow);
console.log(finalPriceCurtain1);
console.log(finalPriceCurtain);
