## JavaScript 之 判断 Object 对象是否为空

痛点：如何有效判断对象里面是否有值

### 1. 使用ES6提供的 Object.keys(obj) 方法  
Object.keys(obj) 返回一个数组，包含对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）的键名。
```js
// true 表示空对象， false 表示非空对象
Object.keys(obj).length === 0 && obj.constructor === Object
```

### 2. 遍历对象，通过对象的 hasOwnProperty() 方法判断  
```js
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
```

### 3. 使用 jquery 的 isEmptyObject(obj) 方法  
其实这个的实现就是上述方法二的原理，且还没有上述方案二的健壮，不推荐作为通用
```js
// true 表示空对象， false 表示非空对象
jquery.isEmptyObject(obj)
```

### 4. 简单使用 JSON.stringify() 方法来判断
```js
if (JSON.stringify(obj) === '{}') {
	// 为空
	return true;
} else {
	// 为非空
	return false;
}
```