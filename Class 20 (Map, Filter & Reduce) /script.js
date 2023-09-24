// Map Method
let array = [45, 50, 60, 70, 85];

// Map creates a new Array
let newArray = array.map((value, index, array)=>{
  console.log(value, index, array);
  return value + 1;
})

console.log(newArray);

//Filter Mehtod
let arrayTwo = [20, 25, 30, 35, 40, 45];
let secondArray = arrayTwo.filter((i)=>{
  return i<=30;
})
console.log(secondArray);

// Reduce Method
let arrayThree = [1, 2, 3, 4, 5, 6, 7];
let thirdArray = arrayThree.reduce((a, b)=>{
  return a + b;
})
console.log(thirdArray);
