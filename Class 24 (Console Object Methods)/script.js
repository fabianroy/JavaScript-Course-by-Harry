console.log("Hello World!");
console.error("There is a error!")

console.assert(5>1);
console.assert(100<99);

// console.clear();

let obj = {a:1, b:2, C:3}
console.table(obj);

console.warn("Do not drink Whine");
console.info("This is an important information");

console.time("a");
console.timeEnd("a");

console.time("forLoop")
for(let i = 0; i<100; i++){
  console.log(i);
}
console.timeEnd("forLoop");
