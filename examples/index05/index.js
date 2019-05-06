var foo = {n:1}; 
var bar = foo; 
foo.x = foo = {n:2}; 
console.log(foo.x);         // undefined
console.log(bar.x);         // { n: 2 }