## 面试题 ['1', '2', '3'].map(parseInt); what & why ?
```txt
1. map的语法：

var new_array = arr.map(function callback(currentValue, index, array) {
	// Return element for new_array
}, thisArg);

- callback  生成新数组元素的函数，有三个参数：
	 - currentValue callback函数正在处理的当前数组元素
	 - index 可选，正在处理的当前数组元素索引
	 - array 可选，map方法被调用的数组
- thisArg 可选，执行callback函数时使用的this值，不传或为null、undefined,则this指向全局对象

2. parseInt(string, radix) 函数解析一个字符串参数，并返回一个指定基数的整数
  - string 要被解析的值，如果这个参数不为字符串类型，则先将其转换为字符串类型（toString方法抽象操作），字符串开头的空白符将会被忽略
  - radix 一个介于2和36之间的整数，表示上述字符串的基数，比如二进制、八进制、十进制、十六进制等。始终指定该参数可消除阅读改代码时的困惑且保证转换结果的可预测性，当未指定基数时，不同的实现会产生不同的结果，通常默认为10.
	当radix值为0，或没有设置该参数时，parseInt()会根据string来判断数字的基数：
	- 如果string以 0x 开头，parseInt()会把string的其余部分解析为十六进制的整数
	- 如果string以 0 开头，那么 ECMAScript v3允许parseInt()的一个实现把其后的字符解析为八进制或十六进制数字
	- 如果string以 1~9 的数字开头，parseInt()将把它解析为十进制整数

注意：
  只有字符串中的第一个数字会被返回；
  开头和结尾的空格是允许的；
  如果字符串的第一个字符不能转换为数字，那么parseInt()会返回NaN；
  在字符串以 0 为开始时，旧的浏览器默认使用八进制基数，支持 ECMAScript5的现代浏览器默认使用十进制基数。
```
