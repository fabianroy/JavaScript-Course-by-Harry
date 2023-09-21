let num = [1, 2, 3, 4, 5, 6];
let numMore = [7, 8, 9, 10];
let numMoreAgain = [11, 12, 13, 14, 15];
  
delete num[0]; // delete an element
console.log(num);

console.log(num.length);

let newArray = num.concat(numMore, numMoreAgain); //Join two or more arrays to create a new
console.log(newArray);

//compare function for sort method
let compare = (a, b)=>{
  return b - a;
}
let number = [5, 6, 3, 2, 7, 9];
number.sort(compare); //sorts alphas and number from low to high
console.log(number);
number.reverse();
console.log(number); //Reverse the array

let x = [1, 2, 3, 4, 5, 6, 7];
x.splice(2, 2, 8, 9, 10);
console.log(x);

let y = [1, 2, 3, 4, 5, 6, 7];
let deletedValues = y.splice(2, 2, 8, 9, 10);
console.log(deletedValues);

y.slice(3);
cpnsole.log(y);
