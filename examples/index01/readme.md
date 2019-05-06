## window.onload 和 $(document).ready() 的区别  
- `window.onload`必须等到页面包括图片的所有元素、链接的所有引用加载完毕后才执行；`$(document).ready()`是DOM结构绘制完毕后就执行，可能DOM元素关联的东西并没有加载完  
- `window.onload`不能同时编写多个，后面的会覆盖前面的，如果有多个，则只会执行最后一个；`$(document).ready()`能同时编写多个  
- `window.onload`无简化写法，`$(document).ready(function() {})`可以简化为：`$(function() {})` 或 `$().ready(function() {})`，`$()`不带参数，默认参数就是`document`  
- 注意：`window.onload = function() {}` 与 `$(window).load(function() {})` 是等价的  


