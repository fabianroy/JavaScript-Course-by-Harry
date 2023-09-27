// Question 3 : number which can be divided by 10 and the moduler will be 0

let arr = [1,2,3,40,50,6,70,80,90];
let n = arr.filter((x)=>{
  return x%10 == 0;
})
console.log(n)
