let num = [1, 2, 3, 4, 5];
for (let i = 0; i<num.length; i++){
  console.log(num[i]);
}

//For Each Loop
num.forEach((element)=>{
  console.log(element*element);
})

//Array.from
let name= "Harry";
let array = Array.from(name);
console.log(array);

//For of loop
for(let i of num){
  console.log(i);
}

//For in loop
for(let item in num){
  console.log(num[item]);
}
