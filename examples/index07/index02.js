/// 和实现1很相似，但稍慢一点，主要原因是它最先是假设至少存在一个空白符。
/// Prototype.js使用这种实现，不过其名字为strip，因为Prototype的方法都是力求与Ruby同名。
String.prototype.trim = function() {
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
}