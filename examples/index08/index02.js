
// 遍历对象，通过对象的 hasOwnProperty() 方法判断

/**
 * 判断 obj 是否为空对象
 * @param  {Object}  obj 需要判断的对象
 * @return {Boolean}     返回true表示空对象，返回false表示非空对象
 */
function isEmptyObj(obj) {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			return false;
		}
	}
	return true && JSON.stringify(obj) === JSON.stringify({});
}

// TODO testing...
let obj = {
	123131: false
};
console.log(isEmptyObj(obj));