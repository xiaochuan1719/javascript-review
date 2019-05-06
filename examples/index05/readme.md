## 从连续赋值到：词法分析、函数执行原理  [待完善]

### 例一
```js
function a(){ 
    var o1 = o2 = 5; 
} 
a(); 
console.log(o1);    // undefined  -> ReferenceError: o1 is not defined
console.log(o2);    // 5
```
其实际执行顺序如下：
```js
var o2;
function a(){ 
    var o1;
    o2 = 5;
    o1 = o2; 
} 
a(); 
console.log(o1); 
console.log(o2); 
```


### 例二
```js
var foo = {n:1}; 
var bar = foo; 
foo.x = foo = {n:2}; 
console.log(foo.x);     // undefined
console.log(bar.x);     // { n: 2 }
```
实际执行顺序如下：
```js
var foo;
var bar;
foo = { n: 1 };
bar = foo;              // bar { n: 1 }
foo.x = undefined;      // . 运算符优先计算
foo.x = (foo = {n:2}); 
console.log(foo.x);     // undefined 
console.log(bar.x);     // { n: 2 } 
```

> [1] js中有5种基本类型(string/number/boolean/null/undefined), 不能对其添加自定义属性。而将对象赋值于一个变量时，其实只是让该变量的指针指向对象；  
> [2] 在赋值运算中, 赋值会从右向左进行，但是有一点， '.' 的运算会优先赋值, 即发生如下:  

> 1 => foo.x = {n: 2} 即指针指向的地址不变(即非重新指向新对象), 只是对指针指向的对象添加了一个属性得到： {n: 1, x: {n: 2}}  
> 2 => foo = {n: 2} 即foo重新指向了另一个新的对象  
> 3 => bar的指针未有改变, 仍指向已经被添加了新属性的 {n:1, x: {n: 2}}  