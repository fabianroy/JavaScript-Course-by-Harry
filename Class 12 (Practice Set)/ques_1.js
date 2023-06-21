// Question #1
// Write a program to print the marls of 4 stuents in an object using for loop.

let marks = {
  Nasif: 90,
  Fabian: 88,
  Mujtabir: 70,
  Mahir: 60
}
for(let i=0; i<Object.keys(marks).length; i++){
  console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
}
