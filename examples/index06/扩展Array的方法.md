## Array 方法 和 扩展

### 扩展 remove 方法
```js
// Array 本身是没有 remove 方法的
Array.prototype.remove = function (val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
}
```