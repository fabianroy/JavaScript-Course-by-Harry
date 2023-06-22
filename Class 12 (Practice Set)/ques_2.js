// Question #2
// Write a program to print the marks of 4 stuents in an object using for in loop.

let marks = {
  Nasif: 90,
  Fabian: 88,
  Mujtabir: 70,
  Mahir: 60
}
for(let i in marks){
  console.log("The marks of " + i + " is " + marks[i]);
}
