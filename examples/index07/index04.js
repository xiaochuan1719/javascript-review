/// 实现2（index02.js）的简化版本就是利用候选操作符连接两个正则。
/// 但这样做就失去了浏览器优化的机会，比不上实现3。由于看来很优雅，许多类库都使用它，如JQuery与mootools
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
}