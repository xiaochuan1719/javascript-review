/// 把符合要求的部分提供出来，放到一个空字符串中。不过效率很差，尤其是在IE6中。
String.prototype.trim = function() {
    return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, '$1');
}