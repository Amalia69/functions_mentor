//different reference
const author = {title: "Sourcery", author: "Terry Pratchett"};
const book = {title: "Sourcery", author: "Terry Pratchett"};
console.log(author === book);
console.log('-------------');

//same reference
const book1 = author;
console.log(author === book1);
console.log('-------------');

//same reference
let a = [10];
let b = a;
console.log(a);
console.log(b);
console.log('-------------');

//new a, so different reference
a=[20];
console.log(a);
console.log(b);
console.log('-------------');

//just compare
console.log(a===b);
console.log('-------------');

//assign same reference 
console.log(a=b);
console.log('-------------');
//quick game1
a=20
b=40
let c=b
console.log(a);
console.log(b);
console.log(c);
console.log('-------------');
b=a 
console.log(a);
console.log(b);
console.log(c);
console.log('-------------');
b +=10
console.log(a);
console.log(b);
console.log(c);
console.log('-------------');
//quick game
a=["Mort", "Sourcery", "Equal Rites"];
b=["Mort", "Sourcery", "Equal Rites"];
c=b
console.log(a);
console.log(b);
console.log(c);
console.log('-------------');
b=a 
c.push("Only C")
b.push("B and A");
console.log(a);
console.log(b);
console.log(c);
console.log('-------------');