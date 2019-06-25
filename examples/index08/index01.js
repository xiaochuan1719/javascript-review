// ES6 新增方法 Object.keys(obj)

let obj = {};

console.log(Object.keys(obj).length);
console.log(obj.constructor);

if (Object.keys(obj).length === 0 && obj.constructor === Object) {
	console.log('=== 对象 obj 为空对象 === true');
} else {
	console.log('=== 对象 obj 为空对象 === false');
}
