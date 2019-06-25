/**
 * 判断 obj 是否为空对象
 * @param  {Object}  obj 需要判断的对象
 * @return {Boolean}     返回true表示空对象，返回false表示非空对象
 */
function isEmptyObj(obj) {
	// console.log(JSON.stringify(obj));
	// console.log(typeof JSON.stringify(obj));
	// console.log(JSON.stringify(obj) === '{}');
	return JSON.stringify(obj) === JSON.stringify({});
}


// TODO testing...

let obj = {
	name: 'Hertz'
};

console.log(isEmptyObj(obj));